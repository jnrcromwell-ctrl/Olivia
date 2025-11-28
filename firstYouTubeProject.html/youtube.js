//create an array containing 20 youtube objects
const youtubeVideos = [
    {
        title: "JavaScript Tutorial for Beginners",
        channel: "Programming with Mosh",
        views: 1500000,
        uploadDate: "2022-01-15",
        duration: "2:30:00",
        image:"images/video1.jpg",
        thumbnail: "https://picsum.photos/id/1011/320/180",
        channelLogo: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        title: "Learn Python in 10 Minutes",
        channel: "Tech With Tim",
        views: 800000,
        uploadDate: "2021-12-20",
        duration: "10:00",
        image:"images/video2.jpg",
        thumbnail: "https://picsum.photos/id/1012/320/180",
        channelLogo: "https://randomuser.me/api/portraits/men/12.jpg"
    },
    {
        title: "React JS Crash Course",
        channel: "Traversy Media",
        views: 1200000,
        uploadDate: "2022-02-10",
        duration: "1:45:00",
        image:"images/video3.jpg",
        thumbnail: "https://picsum.photos/id/1013/320/180",
        channelLogo: "https://randomuser.me/api/portraits/men/13.jpg"
    },
]


document.addEventListener("DOMContentLoaded",() =>{

const maincontent=document.getElementById("maincontent");

// repeat the row 3x
for( let i = 0;i < 10;i++){
    const row =document.createElement("div");
    row.classList.add("row-section");


youtubeVideos.forEach(video => {
    const videoDiv=document.createElement("div");
    videoDiv.classList.add("video-item");

    videoDiv.innerHTML= `
    <img src="assest/image/me.jpg" alt="{video.title}"  style="width:100%">

    `;

 

    row.appendChild(videoDiv);
});    
    
 maincontent.appendChild(row);
}
});



























/*const div = document.getElementById("div");

youtubeVideos.forEach(viedo => {

    const p = document .createElement("p");
    p.innerHTML=viedo.title;
    p.innerHTML=viedo.channel;
    p.innerHTML=viedo.views;
    p.innerHTML=viedo.uploadDate;
    p.innerHTML=viedo.duration;
    div.appendChild(p)
    
});*/