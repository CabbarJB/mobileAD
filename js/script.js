

let video = document.querySelector('.ad-video video');
let videoTimeContainer = document.querySelector('.ad-time-seconds');

video.addEventListener('loadeddata' , ()=>{
    videoTimeContainer.innerText = `${parseInt(video.duration)} seconds left`;
   let videoTimeAfterStart = parseInt(video.duration) - 1;

    setInterval(()=>{
        if(parseInt(video.currentTime)<=parseInt(videoTimeAfterStart)){
            videoTimeContainer.innerText = `${videoTimeAfterStart - parseInt(video.currentTime)} seconds left`
        }
    },1000);

});

let soundBtn = document.querySelector('.video-mute-btn i');




soundBtn.addEventListener('click' , e=>{
    if (e.currentTarget.classList.contains('muted') && e.currentTarget.classList.contains('fa-volume-mute')){
        e.currentTarget.classList.remove('muted')
        e.currentTarget.classList.remove('fa-volume-mute');
        e.currentTarget.classList.add('fa-volume-up');
        video.muted = false;
    }
    else if (e.currentTarget.classList.contains('fa-volume-up')){
        e.currentTarget.classList.add('muted');
        e.currentTarget.classList.add('fa-volume-mute');
        e.currentTarget.classList.remove('fa-volume-up');
        video.muted = true;

    }
});
let rating = 3.5;
function createRateStars(rate) {
    let stars = [];
    if (rate % 1 ===0){
        for (let i=0;i<rate;i++){
            let fullStar = document.createElement('i');
            fullStar.classList.add('fas');
            fullStar.classList.add('fa-star');
            stars.push(fullStar);
        }
        for (let j=0;j<5-rate;j++){
            let emptyStar = document.createElement('i');
            emptyStar.classList.add('far');
            emptyStar.classList.add('fa-star');
            stars.push(emptyStar);
        }
    }
    else if (rate%1!==0){
        for (let k=0;k<parseInt(rate);k++){
            let fullStar = document.createElement('i');
            fullStar.classList.add('fas');
            fullStar.classList.add('fa-star');
            stars.push(fullStar);
        }
        let halfStar = document.createElement('i');
        halfStar.classList.add('fas');
        halfStar.classList.add('fa-star-half-alt');
        stars.push(halfStar);
        for (let c=0;c<5-parseInt(rate);c++){
            let emptyStar = document.createElement('i');
            emptyStar.classList.add('far');
            emptyStar.classList.add('fa-star');
            stars.push(emptyStar);
        }
    }
    return stars;
}

let starsContainer = document.querySelector('.app-rating-stars');
    for (let i = 0;i<5;i++){
        starsContainer.append(createRateStars(rating)[i]);
    }
