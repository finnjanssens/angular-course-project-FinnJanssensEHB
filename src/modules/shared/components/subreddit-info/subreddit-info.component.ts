import { Component, OnInit } from '@angular/core';
import { redditService } from 'src/app/core/services/reddit.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import numberFormatter from '../../../../app/core/util/numberFormatter';
@Component({
  selector: 'app-subreddit-info',
  templateUrl: './subreddit-info.component.html',
  styleUrls: ['./subreddit-info.component.scss'],
})
export class SubredditInfoComponent implements OnInit {
  public subredditData: {
    title: string;
    description: string;
    createdAt: string;
    membersJoined: string;
    membersOnline: string;
    logoSrc: string;
  } = {
    title: '',
    description: '',
    createdAt: '',
    membersJoined: '',
    membersOnline: '',
    logoSrc: '',
  };
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      redditService.getSubredditInfo(params['name']).then((data: any) => {
        this.subredditData.title = data.display_name;
        this.subredditData.description = data.public_description;
        let createdDate = new Date(0);
        createdDate.setUTCSeconds(data.created);
        this.subredditData.createdAt = `Created ${createdDate.toDateString()}`;
        this.subredditData.membersJoined = numberFormatter(data.subscribers, 1);
        this.subredditData.membersOnline = numberFormatter(
          data.active_user_count,
          1
        );
        this.subredditData.logoSrc =
          data.icon_img ||
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0jegsukeSc1DL3RPii_tDNLQClM7dn-qwkA&usqp=CAU';
      });
    });
  }
}
