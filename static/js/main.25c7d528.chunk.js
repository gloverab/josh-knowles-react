(this["webpackJsonpjosh-knowles-react"]=this["webpackJsonpjosh-knowles-react"]||[]).push([[0],{23:function(e,a,t){e.exports=t(36)},28:function(e,a,t){},34:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(17),r=t.n(s),c=(t(28),t(5)),i=t(6),o=t(9),m=t(8),p=t(10),d=t(4),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={smallScreen:window.innerWidth<700,menuExpanded:!1},n.expandMenu=n.expandMenu.bind(Object(p.a)(n)),n.updateDimensions=n.updateDimensions.bind(Object(p.a)(n)),n}return Object(i.a)(t,[{key:"updateDimensions",value:function(){window.innerWidth<700?this.setState({smallScreen:!0}):window.innerWidth>=700&&this.setState({smallScreen:!1})}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions)}},{key:"expandMenu",value:function(){this.setState({menuExpanded:!this.state.menuExpanded})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){window.innerWidth;return l.a.createElement("header",null,!this.state.smallScreen&&l.a.createElement("h2",{className:"title ib"},l.a.createElement(d.b,{to:"/"},"Josh Knowles")),this.state.smallScreen&&l.a.createElement("h2",{className:"title ib",onClick:this.expandMenu},l.a.createElement("i",{className:"fa fa-bars"})),this.state.smallScreen&&l.a.createElement("h2",{className:"title mobile ib"},l.a.createElement(d.b,{to:"/"},"Josh Knowles")),l.a.createElement("ul",{className:"header-nav header-nav-nav ib ".concat(this.state.menuExpanded?"expanded":"")},this.state.smallScreen&&l.a.createElement("li",{className:"header-nav-li header-nav-li-nav ib",onClick:this.expandMenu},l.a.createElement(d.b,{to:"/"},l.a.createElement("h2",null,"Josh Knowles"))),l.a.createElement("li",{className:"header-nav-li header-nav-li-nav ib",onClick:this.expandMenu},l.a.createElement(d.b,{to:"/about"},"About")),l.a.createElement("li",{className:"header-nav-li header-nav-li-nav ib",onClick:this.expandMenu},l.a.createElement(d.b,{to:"/video"},"Video")),l.a.createElement("li",{className:"header-nav-li header-nav-li-nav ib",onClick:this.expandMenu},l.a.createElement(d.b,{to:"/music"},"Music")),l.a.createElement("li",{className:"header-nav-li header-nav-li-nav ib",onClick:this.expandMenu},l.a.createElement(d.b,{to:"/shows"},"Shows")),l.a.createElement("li",{className:"header-nav-li header-nav-li-nav ib",onClick:this.expandMenu},l.a.createElement(d.b,{to:"/epk"},"Press")),l.a.createElement("li",{className:"header-nav-li header-nav-li-nav ib",onClick:this.expandMenu},l.a.createElement(d.b,{to:"/contact"},"Contact"))),l.a.createElement("ul",{className:"header-nav header-nav-social ib"},l.a.createElement("li",{className:"header-nav-li header-nav-social-li ib"},l.a.createElement("a",{href:"https://www.facebook.com/joshknowlesmusic"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",{className:"header-nav-li header-nav-social-li ib"},l.a.createElement("a",{href:"https://www.twitter.com/joshnemes"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",{className:"header-nav-li header-nav-social-li ib"},l.a.createElement("a",{href:"https://www.instagram.com/joshnemes"},l.a.createElement("i",{className:"fa fa-instagram"})))))}}]),t}(l.a.Component),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={hideText:!1,aboutPage:"/about"===e.location.pathname,contactPage:"/contact"===e.location.pathname},n}return Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var a=this;this.props.location.pathname!==e.location.pathname&&this.setState({hideText:!0,aboutPage:"/about"===e.location.pathname,contactPage:"/contact"===e.location.pathname},(function(){setTimeout((function(){a.setState({hideText:!1})}),300)}))}},{key:"render",value:function(){var e=this.state,a=e.aboutPage,t=e.contactPage;return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"content-wrapper noscroll"},l.a.createElement("div",{className:"news-container ".concat(a?"about":""," ").concat(t?"contact":"")},!a&&!t&&!this.state.hideText&&l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"news-card"},l.a.createElement("h4",{className:"news-header"},"See: ",l.a.createElement("a",{href:"https://festivalballetprovidence.org/2019-2020-season/game-changers/",target:"blank"},"Gamechangers - Feb 7-9")),l.a.createElement("h4",{className:"news-subheader"},"Josh Knowles performing live with Providence Festival Ballet"),l.a.createElement("ul",{className:"news-list"},l.a.createElement("li",{className:"news-list-li"},l.a.createElement("a",{href:"https://festivalballetprovidence.org/2019-2020-season/game-changers/",target:"blank"},"\xa0",l.a.createElement("i",{className:"fa fa-newspaper-o"}),"\xa0\xa0Click for more information")))),l.a.createElement("div",{className:"news-card"},l.a.createElement("h4",{className:"news-header"},"Listen: ",l.a.createElement("a",{href:"http://hyperurl.co/kuqkig",target:"blank"},"Josh Knowles - Boxes ",l.a.createElement("i",{className:"fa fa-play"}))),l.a.createElement("h4",{className:"news-subheader"},'Brand new single "Boxes" now streaming everywhere'),l.a.createElement("ul",{className:"news-list"},l.a.createElement("li",{className:"news-list-li"},l.a.createElement("a",{href:"http://hyperurl.co/kuqkig",target:"blank"},"\xa0",l.a.createElement("i",{className:"fa fa-spotify"}),"\xa0\xa0Boxes - Listen now")))),l.a.createElement("div",{className:"news-card"},l.a.createElement("h4",{className:"news-header"},"Watch: ",l.a.createElement("a",{href:"https://www.youtube.com/watch?v=_drI0UGkKZg",target:"blank"},"Same ",l.a.createElement("i",{className:"fa fa-youtube-play"}))),l.a.createElement("h4",{className:"news-subheader"},'Music video for debut single "Same," featuring Boston Ballet'),l.a.createElement("ul",{className:"news-list"},l.a.createElement("li",{className:"news-list-li"},l.a.createElement("a",{href:"https://www.youtube.com/watch?v=_drI0UGkKZg",target:"blank"},"\xa0",l.a.createElement("i",{className:"fa fa-camera"}),"\xa0\xa0Same - Watch now"))))),a&&l.a.createElement(n.Fragment,null,!this.state.hideText&&l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Josh Knowles"),l.a.createElement("p",null,"Josh Knowles is an electric violinist, singer/songwriter, and composer based in Boston, MA. He brings an eclectic array of influences to his original work, continually striving to fuse his traditional foundation with modern songwriting, experimental studio production, and stunning live performances."),l.a.createElement("p",null,"An in-demand and versatile musician, Knowles has featured on albums by ",l.a.createElement("span",{className:"bold"},"The Front Bottoms"),", ",l.a.createElement("span",{className:"bold"},"John Nolan")," (Taking Back Sunday), and ",l.a.createElement("span",{className:"bold"},"An Horse"),", performed on stages for ",l.a.createElement("span",{className:"bold"},"Barack Obama"),", ",l.a.createElement("span",{className:"bold"},"David Letterman")," and ",l.a.createElement("span",{className:"bold"},"James Taylor"),", and frequently collaborates with ",l.a.createElement("span",{className:"bold"},"Cirio Collective")," and ",l.a.createElement("span",{className:"bold"},"Boston Ballet"),", with whom he has appeared on stage for historic runs at the Boston Opera House and the Lincoln Center in New York. He currently resides as a Community Luminary at the Isabella Stewart Gardner Museum, where he performs regularly."),l.a.createElement("p",null,'In February of 2018, Knowles released "Spin Without A Sound," his debut instrumental album of loop-based ethereal solo electric violin pieces.'),l.a.createElement("p",null,'In summer 2019 he showcased his songwriting side with debut breakthrough single "Same," which incorporated his signature electric violin tones but also showcased his prowess as a songwriter and vocalist. A unique and cathartic ballad, "Same" has garnered nearly 100,000 plays on Spotify.'),l.a.createElement("p",null,"In early 2020, Knowles premiered a collection of new original material by performing it live on stage during a 3 night run with Providence Festival Ballet. His powerful experimental song and upcoming single \u201cHow Deep the Dark\u201d opened the show, and will be released everywhere on May 26, 2020."))),t&&l.a.createElement(n.Fragment,null,!this.state.hideText&&l.a.createElement(n.Fragment,null,l.a.createElement("h2",null,"Contact"),l.a.createElement("p",null,"Please feel free to get in touch!"),l.a.createElement("p",null,"Contact/Booking: ",l.a.createElement("a",{href:"mailto:jaknowles320@gmail.com"},"jaknowles320@gmail.com")),l.a.createElement("p",null,"Press: ",l.a.createElement("a",{href:"mailto:alex@birdlabrecords.com"},"alex@birdlabrecords.com")),l.a.createElement("p",null,"Facebook: ",l.a.createElement("a",{href:"http://www.facebook.com/joshknowlesmusic"},"@joshknowlesmusic")),l.a.createElement("p",null,"Instagram: ",l.a.createElement("a",{href:"http://www.instagram.com/joshknowlesmusic"},"@joshknowlesmusic"))))),l.a.createElement("div",{className:"image-wrapper ".concat(a?"":"hide")},l.a.createElement("img",{src:"https://i.imgur.com/1itLFSG.jpg"}))))}}]),t}(l.a.Component),w=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={expandText:!1},n.expandText=n.expandText.bind(Object(p.a)(n)),n}return Object(i.a)(t,[{key:"expandText",value:function(){this.setState({expandText:!this.state.expandText})}},{key:"render",value:function(){return l.a.createElement("div",{className:"videos-container main-container"},l.a.createElement("div",{className:"internal-container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"music-release-wrapper"},l.a.createElement("div",{className:"music-links-wrapper"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",null,"Boxes - Single"),l.a.createElement("h4",null,"Released Feb 7, 2020")),l.a.createElement("div",{className:"text-wrapper"},l.a.createElement("p",null,"Boxes was premiered live onstage alongside Festival Ballet Providence")),l.a.createElement("div",{className:"music-links"},l.a.createElement("a",{href:"https://joshknowles.bandcamp.com/track/boxes",target:"blank"},"Bandcamp"),l.a.createElement("a",{href:"https://open.spotify.com/track/7ny3Fs5KawyleUb6PjGxUm?si=csrPBOlURCOpc6lj3h1hVg",target:"blank"},"Spotify"),l.a.createElement("a",{href:"https://music.apple.com/us/album/boxes-single/1497640073",target:"blank"},"Apple Music"),l.a.createElement("a",{href:"https://music.apple.com/us/album/boxes-single/1497640073",target:"blank"},"iTunes"))),l.a.createElement("div",{className:"image-wrapper sm"},l.a.createElement("img",{src:"https://i.imgur.com/5BmnBNZ.png"}))),l.a.createElement("div",{className:"music-release-wrapper"},l.a.createElement("div",{className:"image-wrapper sm"},l.a.createElement("img",{src:"https://i.imgur.com/oAfkWjn.jpg"})),l.a.createElement("div",{className:"music-links-wrapper"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",null,"Thrown Stone - Single"),l.a.createElement("h4",null,"Released Jan 15, 2020")),l.a.createElement("div",{className:"text-wrapper"}),l.a.createElement("div",{className:"music-links"},l.a.createElement("a",{href:"https://joshknowles.bandcamp.com/track/throne-stone",target:"blank"},"Bandcamp"),l.a.createElement("a",{href:"https://open.spotify.com/track/1EuAAuA8p81uigHNO17J8N?si=8Rb4mLtbTdW9ZePFTxXx1w",target:"blank"},"Spotify"),l.a.createElement("a",{href:"https://music.apple.com/us/album/thrown-stone-single/1493555447",target:"blank"},"Apple Music/iTunes"),l.a.createElement("a",{href:"https://www.youtube.com/watch?v=fSD5CPvRc-Q&t=4s",target:"blank"},"Youtube")))),l.a.createElement("div",{className:"music-release-wrapper"},l.a.createElement("div",{className:"music-links-wrapper"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",null,"Same - Single"),l.a.createElement("h4",null,"Released April 24, 2019")),l.a.createElement("div",{className:"text-wrapper"}),l.a.createElement("div",{className:"music-links"},l.a.createElement("a",{href:"https://joshknowles.bandcamp.com/track/same",target:"blank"},"Bandcamp"),l.a.createElement("a",{href:"https://open.spotify.com/track/1yEnmru0YziioqclSpLsDe?si=eiMCfJubRdCBwVcmlmwRYA",target:"blank"},"Spotify"),l.a.createElement("a",{href:"https://music.apple.com/us/album/same-single/1459414420",target:"blank"},"Apple Music/iTunes"),l.a.createElement("a",{href:"https://www.youtube.com/watch?v=_drI0UGkKZg",target:"blank"},"Youtube"))),l.a.createElement("div",{className:"image-wrapper sm"},l.a.createElement("img",{src:"https://i.imgur.com/m7g6Dfi.jpg"}))),l.a.createElement("div",{className:"music-release-wrapper"},l.a.createElement("div",{className:"image-wrapper sm"},l.a.createElement("img",{src:"https://i.imgur.com/5RvwqJA.jpg"})),l.a.createElement("div",{className:"music-links-wrapper"},l.a.createElement("div",{className:"title-wrapper"},l.a.createElement("h2",null,"Spin Without A Sound"),l.a.createElement("h4",null,"Released Feb 19, 2018")),l.a.createElement("div",{className:"text-wrapper"},l.a.createElement("p",null,"It\u2019s not often that a singular room influences an entire body of musical work, but in the case of Josh Knowles\u2019 debut solo electric violin album \u201cSpin Without A Sound,\u201d the inspiration is palpable. Conceived over the course of several marathon performances in the courtyard of Boston\u2019s Isabella Stewart Gardner Museum, \u201cSpin Without A Sound\u201d captures the sonic soul that the architectural tour-de-force bears, transporting the listener back to Knowles\u2019 performances within the museum walls. ",!this.state.expandText&&l.a.createElement("a",{className:"more",onClick:this.expandText},"more...")),this.state.expandText&&l.a.createElement(n.Fragment,null,l.a.createElement("p",null,"During his engagements in the courtyard, Josh experimented with a DL4 Loop Pedal, recording and layering improvised violin melodies. The result was an ethereal, constantly morphing soundscape that Knowles entered the studio with the explicit intention of recapturing."),l.a.createElement("p",null,"\u201cSpin Without A Sound\u201d, released in February 2018, was recorded in a series of raw, live recording sessions that often ran even longer than his museum performances. This process allowed Knowles to naturally expand upon the ideas conceptualized at the Gardner and create a record steeped in nostalgic intimacy. \u201cStatue Breath\u201d samples audio from decades-old home videos, while the haunting \u201cGavotte (circa 1998)\u201d starts with the sounds of eight-year-old Josh performing at one of his early violin recitals. The title-track, a lilting, expansive ballad, excavates answering machine relics from Josh\u2019s late grandmother, whose soothing voice materializes out of the lush bed of strings. ",this.state.expandText&&l.a.createElement("a",{className:"more",onClick:this.expandText},"...less")))),l.a.createElement("div",{className:"music-links"},l.a.createElement("a",{href:"https://joshknowles.bandcamp.com/releases",target:"blank"},"Bandcamp"),l.a.createElement("a",{href:"https://open.spotify.com/album/2FG54Y9J7YxuQ5CnZiNUTX",target:"blank"},"Spotify"),l.a.createElement("a",{href:"https://itunes.apple.com/us/album/spin-without-a-sound/1347799058?app=music",target:"blank"},"Apple Music"),l.a.createElement("a",{href:"https://itunes.apple.com/us/album/spin-without-a-sound/1347799058?app=music",target:"blank"},"iTunes")))))))}}]),t}(l.a.Component);function E(){return l.a.createElement("div",{className:"main-container-plain",id:"press"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"spaced"},"Josh Knowles - EPK Spring 2020"),l.a.createElement("hr",null),l.a.createElement("div",{className:"column-left"},l.a.createElement("img",{className:"press-img spaced",src:"https://i.imgur.com/LKHbdLD.png"}),l.a.createElement("h3",{className:"bold spaced"},"Artist Information"),l.a.createElement("hr",null),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Label: "),"Independent"),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Genre: "),"Indie/Indie Pop/Folktronica"),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Hometown: "),"Boston, MA"),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"For Fans Of: "),"James Blake, Sylvan Esso, Bon Iver"),l.a.createElement("h3",{className:"bold spaced"},"Biography"),l.a.createElement("hr",null),l.a.createElement("p",null,"Josh Knowles is an electric violinist, singer/songwriter, and composer based in Boston, MA. He brings an eclectic array of influences to his original work, continually striving to fuse his traditional foundation with modern songwriting, experimental studio production, and stunning live performances."),l.a.createElement("p",null,"An in-demand and versatile musician, Knowles has featured on albums by ",l.a.createElement("span",{className:"bold"},"The Front Bottoms"),", ",l.a.createElement("span",{className:"bold"},"John Nolan")," (Taking Back Sunday), and ",l.a.createElement("span",{className:"bold"},"An Horse"),", performed on stages for ",l.a.createElement("span",{className:"bold"},"Barack Obama"),", ",l.a.createElement("span",{className:"bold"},"David Letterman")," and ",l.a.createElement("span",{className:"bold"},"James Taylor"),", and frequently collaborates with ",l.a.createElement("span",{className:"bold"},"Cirio Collective")," and ",l.a.createElement("span",{className:"bold"},"Boston Ballet"),", with whom he has appeared on stage for historic runs at the Boston Opera House and the Lincoln Center in New York. He currently resides as a Community Luminary at the Isabella Stewart Gardner Museum, where he performs regularly."),l.a.createElement("p",null,'In February of 2018, Knowles released "Spin Without A Sound," his debut instrumental album of loop-based ethereal solo electric violin pieces.'),l.a.createElement("p",null,'In summer 2019 he showcased his songwriting side with debut breakthrough single "Same," which incorporated his signature electric violin tones but also showcased his prowess as a songwriter and vocalist. A unique and cathartic ballad, "Same" has garnered nearly 100,000 plays on Spotify.'),l.a.createElement("p",null,"In early 2020, Knowles premiered a collection of new original material by performing it live on stage during a 3 night run with Providence Festival Ballet. His powerful experimental song and upcoming single \u201cHow Deep the Dark\u201d opened the show, and will be released everywhere on May 26, 2020."),l.a.createElement("h3",{className:"bold spaced"},"Links"),l.a.createElement("hr",null),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Website: "),l.a.createElement("a",{className:"link",href:"https://www.joshknowlesmusic.com/",target:"_blank"},"https://www.joshknowlesmusic.com/")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Facebook: "),l.a.createElement("a",{className:"link",href:"https://facebook.com/joshknowlesmusic",target:"_blank"},"https://www.facebook.com/joshknowlesmusic")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Instagram: "),l.a.createElement("a",{className:"link",href:"https://instagram.com/joshknowlesmusic",target:"_blank"},"@joshknowlesmusic")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"YouTube: "),l.a.createElement("a",{className:"link",href:"https://www.youtube.com/channel/UCRiNextM-ExZS7S3qGNTxbw",target:"_blank"},"\u200bJosh Knowles on YouTube")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Spotify: "),l.a.createElement("a",{className:"https://open.spotify.com/artist/2cYJgCe7KbXn1Y4TL0JCrK",href:"lllll",target:"_blank"}," osh Knowles on Spotify")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Apple Music/iTunes: "),l.a.createElement("a",{className:"link",href:"https://music.apple.com/us/artist/josh-knowles/635148421",target:"_blank"},"J\u200bosh Knowles on Apple Music")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Bandcamp: "),l.a.createElement("a",{className:"link",href:"https://joshknowles.bandcamp.com",target:"_blank"},"Josh Knowles on Bandcamp"))),l.a.createElement("div",{className:"column-right"},l.a.createElement("div",{className:"press-links"},l.a.createElement("h3",{className:"bold spaced"},"Press"),l.a.createElement("hr",null),l.a.createElement("p",{className:"italic"},"\u201cSoothing melodies brought to powerful climaxes generated by way of an array of electronic effects: looped string tracks mixed together on-stage\u201d -",l.a.createElement("a",{href:"https://artsfuse.org/171606/theater-music-review-ruby-rose-fox-remembrance-of-musical-protests-past/",className:"link",target:"_blank"},"ArtsFuse")),l.a.createElement("p",{className:"italic"},"\u201cHe plucks...he bows, he loops. Josh Knowles uses the entire musical arsenal of the violin. And he sings...a pop music voice, rich with great range, especially suited to enter a quiet room on a rich, warm violin music bed.\u201d -",l.a.createElement("a",{href:"https://geoffwilburmusic.com/tag/josh-knowles/",className:"link",target:"_blank"},"Geoff Wilbur Music")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://vanyaland.com/2018/04/13/josh-knowles-tweaks-instrumental-bliss-debut-solo-album/",target:"_blank"},l.a.createElement("span",{className:"bold"},"April 2018")," - Vanyaland - Josh Knowles Tweaks his Instrumental Bliss (Feature)")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"http://www.bostonsurvivalguide.net/wordpress/2018/04/josh-knowles-weaves-violin-magic-on-spin-without-a-sound/",target:"_blank"},l.a.createElement("span",{className:"bold"},"April 2018"),"\u200b - Boston Survival Guide - Josh Knowles Weaves Violin Magic (Feature)")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://geoffwilburmusic.com/2018/04/01/behind-the-songs-2/",target:"_blank"},l.a.createElement("span",{className:"bold"},"April 2018")," - Geoff Wilbur Music - Hard Rock Cafe Behind the Songs Review")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://ihrtn.net/watch-josh-knowles-great-blue-world/",target:"_blank"},l.a.createElement("span",{className:"bold"},"May 2018"),"\u200b - I Heart Noise - \u201cGreat Blue World\u201d (Video Feature)")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://artsfuse.org/171606/theater-music-review-ruby-rose-fox-remembrance-of-musical-protests-past/",target:"_blank"},l.a.createElement("span",{className:"bold"},"June 2018"),"\u200b - The Arts Fuse - Oberon Theater Concert Review")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://ihrtn.net/show-review-love-chastity-and-death-josh-knowles-at-the-isabella-stewart-gardner-museum-08-09-18/2/",target:"_blank"},l.a.createElement("span",{className:"bold"},"August 2018")," - I Heart Noise - ISGM Calderwood Hall Concert Review")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://www.bostonmagazine.com/arts-entertainment/2019/04/26/boston-ballet-dancers-music-video-josh-knowles/",target:"_blank"},l.a.createElement("span",{className:"bold"},"April 2019"),'\u200b - Boston Magazine - "Same" (Writeup)')),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://www.pointemagazine.com/dont-miss-boston-ballets-lia-cirio-and-paul-craig-in-this-new-music-video-2635415909.html",target:"_blank"},l.a.createElement("span",{className:"bold"},"April 2019")," - Pointe Magazine - \u201cSame\u201d (Premiere)")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://stringsmagazine.com/violinist-josh-knowles-on-his-new-music-video-ethereal-violin-sound/",target:"_blank"},l.a.createElement("span",{className:"bold"},"May 2019")," - Strings Magazine Feature"),"\u200b"),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://www.boston.com/culture/music/2019/05/09/watch-boston-ballet-dancers-duet-in-this-electric-violinists-music-video",target:"_blank"},l.a.createElement("span",{className:"bold"},"May 2019"),"\u200b - Boston.com - \u201cSame\u201d (Writeup)")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://www.providencejournal.com/entertainmentlife/20200205/festival-ballet-providence-breaks-new-ground-with-innovative-edgy-game-changers",target:"_blank"},l.a.createElement("span",{className:"bold"},"February 2020"),"\u200b - Providence Journal - Festival Ballet (Writeup)")),l.a.createElement("p",{className:"strip"},l.a.createElement("a",{className:"link",href:"https://www.pointemagazine.com/lia-cirio-paul-craig-video-2645736970.html?rebelltitem=2%23rebelltitem2",target:"_blank"},l.a.createElement("span",{className:"bold"},"March 2020"),"\u200b - Pointe Magazine - \u201cReverie\u201d (Writeup)"))),l.a.createElement("h3",{className:"bold spaced"},"Videos"),l.a.createElement("hr",null),l.a.createElement("img",{className:"videos-image",src:"https://i.imgur.com/x9SrI1i.png"}),l.a.createElement("p",null,l.a.createElement("a",{href:"https://youtu.be/_drI0UGkKZg",className:"link",target:"_blank"},"Same - Official Music Video (Feat. Boston Ballet Dancers)")),l.a.createElement("img",{className:"videos-image",src:"https://i.imgur.com/Q2WymHo.png"}),l.a.createElement("p",null,l.a.createElement("a",{href:"https://youtu.be/92P4t0kXL0Y",className:"link",target:"_blank"},"Ember - Live Loop Performance")),l.a.createElement("img",{className:"videos-image",src:"https://i.imgur.com/HhRsNlH.png"}),l.a.createElement("p",null,l.a.createElement("a",{href:"https://www.youtube.com/watch?v=fSD5CPvRc-Q",className:"link",target:"_blank"},"Thrown Stone - Official Music Video")),l.a.createElement("h3",{className:"bold spaced"},"Contact"),l.a.createElement("hr",null),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Josh Knowles")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Email: "),l.a.createElement("a",{className:"link",href:"mailto:jaknowles320@gmail.com"},"\u200bjaknowles320@gmail.com")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Phone: "),"\u200b857-636-1963"),l.a.createElement("div",{className:"spaced"}),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Alex Glover")," - ",l.a.createElement("span",{className:"italic"},"Booking / Management / Information")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Email: "),l.a.createElement("a",{className:"link",href:"mailto:jaknowles320@gmail.com"},"\u200bjaknowles320@gmail.com")),l.a.createElement("p",{className:"strip"},l.a.createElement("span",{className:"bold"},"Phone: "),"\u200b857-636-1963")),l.a.createElement("div",{className:"clear"})))}var b=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){return Object(c.a)(this,t),a.call(this,e)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://widget.bandsintown.com/main.min.js",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){return l.a.createElement("div",{className:"main-container"},l.a.createElement("div",{className:"content-wrapper shows-wrapper"},l.a.createElement("div",{className:"shows-internal"},l.a.createElement("a",{className:"bit-widget-initializer","data-artist-name":"Josh Knowles","data-display-local-dates":"false","data-display-past-dates":"true","data-auto-style":"false","data-text-color":"#FFFFFF","data-link-color":"#2F95DE","data-popup-background-color":"rgba(0,0,0,0)","data-background-color":"rgba(0,0,0,0)","data-display-limit":"15","data-link-text-color":"#FFFFFF"}))))}}]),t}(l.a.Component);function g(e){return l.a.createElement("div",{className:"videos-container main-container"},l.a.createElement("div",{className:"internal-container"},l.a.createElement("div",{className:"video-card featured"},l.a.createElement("h3",null,"Featured Video:"),l.a.createElement("h1",null,"Josh Knowles - Same (Official Music Video feat. Boston Ballet)"),l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{className:"featured-vid",src:"https://www.youtube.com/embed/_drI0UGkKZg",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),l.a.createElement("div",{className:"video-card video-card-other"},l.a.createElement("h2",null,"Josh Knowles - Ember (Live Loop Performance)"),l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{className:"featured-vid",src:"https://www.youtube.com/embed/92P4t0kXL0Y",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),l.a.createElement("div",{className:"video-card video-card-other"},l.a.createElement("h2",null,"Lane 8 - Atlas (violin remix)"),l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{className:"featured-vid",src:"https://www.youtube.com/embed/kT8V7rJWVys",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),l.a.createElement("div",{className:"video-card video-card-other"},l.a.createElement("h2",null,"Chance the Rapper - Same Drugs (violin loop cover)"),l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{className:"featured-vid",src:"https://www.youtube.com/embed/49O7AMaeD2U",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),l.a.createElement("div",{className:"video-card video-card-other"},l.a.createElement("h2",null,"Half of My Life (w/ Cirio Collective)"),l.a.createElement("div",{className:"video-wrapper"},l.a.createElement("iframe",{className:"featured-vid",src:"https://www.youtube.com/embed/aKkT3HGWjTc",frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0})))))}function f(e){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(d.d,null,l.a.createElement(d.c,{path:"/video",component:g}),l.a.createElement(d.c,{path:"/music",component:w}),l.a.createElement(d.c,{path:"/epk",component:E}),l.a.createElement(d.c,{path:"/shows",component:b}),l.a.createElement(d.c,{path:"/",component:u}))))}t(34),t(35);var v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null))}}]),t}(n.Component),N=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");N?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):k(e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.25c7d528.chunk.js.map