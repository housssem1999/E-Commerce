import { Component } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-sqlite',
  templateUrl: 'sqlite.html',
})
export class SqlitePage {
  private db: SQLiteObject;
  movies: string[] = [];
  titleMovie: string;
  ratingMovie: number;
  descriptionMovie: string;
  categorieMovie: string;
  constructor(public navCtrl: NavController, private sqlite: SQLite) {
  this.createDatabaseFile();
  }
  private createDatabaseFile(): void {
    this.sqlite.create({
    name: 'watch',
    location: 'default'
    })
    .then((db: SQLiteObject) => {
    console.log('Bdd créée !');
    this.db = db;
    this.createTables();
    })
    .catch(e => console.log(e));
    }
    private createTables(): void {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS `MOVIES` ( `idMovies` INTEGER NOT NULL, `name` TEXT NOT NULL, `eval` INTEGER NOT NULL DEFAULT 3, `desc` TEXT, `categoryId` INTEGER, PRIMARY KEY(`idMovies`), FOREIGN KEY(`categoryId`) REFERENCES idCategories )', {})
      .then(() => {
      console.log('Table Movies created !');
      this.db.executeSql('CREATE TABLE IF NOT EXISTS `CATEGORIES` ( `idCategories` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, `name` TEXT NOT NULL )', {})
      .then(() => console.log('Table Categories created !'))
      .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
      }

      public retrieveFilms() {
        this.movies = [];
        this.db.executeSql('SELECT name FROM `MOVIES`', {})
        .then((data) => {
        if(data == null) {
          return;
        }
        if(data.rows) {
          if(data.rows.length > 0) {
            for(var i = 0; i < data.rows.length; i++) {
            this.movies.push(data.rows.item(i).name);
            }
          }
        }
        });
        }
}
