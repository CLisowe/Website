let prevScroll = window.scrollY;
window.addEventListener('scroll', function(){
    const currentScroll = window.scrollY;

    if(prevScroll>currentScroll){
        this.document.querySelector('#fulltop').classList.add('hidden');
    }else{
        this.document.querySelector('#fulltop').classList.remove('hidden');
    }

    prevScroll=currentScroll;
});