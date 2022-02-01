import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SeriesService {
  series = [
    {
      id: 0,
      title: 'Bitten',
      language: 'English',
      genres: 'Drama Horror Romance',
      rating: 7.6,
      country: 'Canada',
      image:
        'http://static.tvmaze.com/uploads/images/original_untouched/0/15.jpg',
      summary:
        'Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State,Bitten follows the adventures of 28-year-old Elena Michaels, the world\'s only female werewolf. An orphan, Elena thought she finally found her "happily ever after" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack',
      catagory: 'series',
    },
    {
      id: 1,
      title: 'Arrow',
      language: 'English',
      genres: 'Drama Action Science-Fiction',
      rating: 7.6,
      country: 'United States',

      image:
        'http://static.tvmaze.com/uploads/images/original_untouched/165/414895.jpg',
      summary:
        'After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.',
      catagory: 'series',
    },
  ];
  seriesChange = new Subject<any>();
  getAllSeries() {
    return this.series.slice();
  }
  getSeries(id) {
    let series = this.series.find((obj) => {
      return obj.id == id;
    });
    return series;
  }
  addSeries(seriesObj) {
    let newSeries = seriesObj;
    newSeries['id'] = this.series.length;
    newSeries['catagory'] = 'series';
    this.series.push(newSeries);
    this.seriesChange.next(this.series.slice());
  }
  deleteSeries(index: number) {
    this.series.splice(index, 1);
    this.seriesChange.next(this.series.slice());
  }
}
