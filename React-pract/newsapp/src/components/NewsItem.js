import React from 'react'

const NewsItem=(props)=>  {
//   articles= [
//     {
//         "source": {
//             "id": "news24",
//             "name": "News24"
//         },
//         "author": "AFP",
//         "title": "Kohli 'anxious' and 'fried' but will battle out of alarming slump",
//         "description": "Virat Kohli deserves more respect and will fight his way out of an alarming slump which hit a new low when he suffered a second successive golden duck in the IPL, fellow cricket stars say.",
//         "url": "https://www.news24.com/sport/Cricket/IPL/kohli-anxious-and-fried-but-will-battle-out-of-alarming-slump-20220425",
//         "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3196/0cf8dc0db09446b6a76002a766a19f7e.jpg",
//         "publishedAt": "2022-04-26T06:35:36+00:00",
//         "content": "Virat Kohli deserves more respect and will fight his way out of an alarming slump which hit a new low when he suffered a second successive golden duck in the IPL, fellow cricket stars say.\r\nIt is the… [+3308 chars]"
//     },
//     {
//         "source": {
//             "id": "bbc-sport",
//             "name": "BBC Sport"
//         },
//         "author": "BBC Sport",
//         "title": "Shane Warne memorial - watch & follow updates",
//         "description": "Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.",
//         "url": "http://www.bbc.co.uk/sport/live/cricket/60916236",
//         "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
//         "publishedAt": "2022-03-30T08:22:26.498888Z",
//         "content": "Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//         "publishedAt": "2020-04-27T11:41:47Z",
//         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//         "publishedAt": "2020-03-30T15:26:05Z",
//         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
// ]
//     constructor(){
//       super();
//       this.state ={
//         articles :this.articles,
//         loading:false
//       }
//     }


  
    let {title,description,imageurl,newsurl,author,date,source}= props;
    return (
      <div className='my-3'>
        <div className="card" >
        <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
           <span className=" badge rounded-pill bg-danger" >{source}</span>
        </div>
       
          <img src={imageurl?imageurl:"https://images.hindustantimes.com/img/2022/04/26/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1650931438960.jpeg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreferrer" href={newsurl}  className="btn btn-sm btn-primary">Read More</a>     {/* target="_blank" */}
            </div>
        </div>
                                              
      </div>                                   
    )
  
}

export default NewsItem