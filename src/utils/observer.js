const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        if(entry.intersectionRatio > 0 ){
            entry.target.classList.add('active');
        }
        else{
            entry.target.classList.remove('active');
        }
    })

})

export default observer;