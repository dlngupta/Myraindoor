import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  constructor() { }
  email:string="";
  ngOnInit(): void {
  }
  users:any=[
    {
      id: 1,
      first_name: "Boy",
      last_name: "Jelkes",
      email: "bjelkes0@economist.com",
      gender: "Male",
      contact: "418-674-3869"
    },
    {
      id: 2,
      first_name: "Layton",
      last_name: "Kinnerk",
      email: "lkinnerk1@hhs.gov",
      gender: "Male",
      contact: "672-859-6880"
    },
    {
      id: 3,
      first_name: "Murvyn",
      last_name: "Strooband",
      email: "mstrooband2@unc.edu",
      gender: "Male",
      contact: "939-169-8552"
    },
    {
      id: 4,
      first_name: "Diena",
      last_name: "Blunderfield",
      email: "dblunderfield3@ow.ly",
      gender: "Agender",
      contact: "690-119-5025"
    },
    {
      id: 5,
      first_name: "Thaddeus",
      last_name: "Hugill",
      email: "thugill4@altervista.org",
      gender: "Male",
      contact: "420-769-0163"
    },
    {
      id: 6,
      first_name: "Orin",
      last_name: "Steane",
      email: "osteane5@shareasale.com",
      gender: "Male",
      contact: "233-960-7349"
    },
    {
      id: 7,
      first_name: "Lilias",
      last_name: "Poultney",
      email: "lpoultney6@ovh.net",
      gender: "Female",
      contact: "117-504-5108"
    },
    {
      id: 8,
      first_name: "Milissent",
      last_name: "Doble",
      email: "mdoble7@bloglines.com",
      gender: "Female",
      contact: "682-683-1965"
    },
    {
      id: 9,
      first_name: "Melly",
      last_name: "Gwynne",
      email: "mgwynne8@zdnet.com",
      gender: "Female",
      contact: "305-681-5092"
    },
    {
      id: 10,
      first_name: "Marcille",
      last_name: "O'Scollee",
      email: "moscollee9@behance.net",
      gender: "Female",
      contact: "441-918-3431"
    },
    {
      id: 11,
      first_name: "Elspeth",
      last_name: "Frediani",
      email: "efrediania@squidoo.com",
      gender: "Female",
      contact: "331-357-9678"
    },
    {
      id: 12,
      first_name: "Bunnie",
      last_name: "MacNamee",
      email: "bmacnameeb@thetimes.co.uk",
      gender: "Female",
      contact: "756-100-3675"
    },
    {
      id: 13,
      first_name: "Fiona",
      last_name: "Elleray",
      email: "fellerayc@slate.com",
      gender: "Female",
      contact: "617-233-2695"
    },
    {
      id: 14,
      first_name: "Brigitte",
      last_name: "Rosenfelder",
      email: "brosenfelderd@wiley.com",
      gender: "Female",
      contact: "615-715-3276"
    },
    {
      id: 15,
      first_name: "Ronald",
      last_name: "Treamayne",
      email: "rtreamaynee@miibeian.gov.cn",
      gender: "Male",
      contact: "677-474-4522"
    },
    {
      id: 16,
      first_name: "Berna",
      last_name: "Spitell",
      email: "bspitellf@google.com.au",
      gender: "Female",
      contact: "828-333-9362"
    },
    {
      id: 17,
      first_name: "Andrea",
      last_name: "Argent",
      email: "aargentg@weather.com",
      gender: "Male",
      contact: "959-151-2920"
    },
    {
      id: 18,
      first_name: "Borg",
      last_name: "Lissimore",
      email: "blissimoreh@europa.eu",
      gender: "Male",
      contact: "254-867-1613"
    },
    {
      id: 19,
      first_name: "Todd",
      last_name: "Errey",
      email: "terreyi@vimeo.com",
      gender: "Male",
      contact: "837-151-5680"
    },
    {
      id: 20,
      first_name: "Kay",
      last_name: "Pury",
      email: "kpuryj@techcrunch.com",
      gender: "Female",
      contact: "982-224-0600"
    }
  ]


}
