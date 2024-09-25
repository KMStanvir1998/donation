document.getElementById('donationButton').addEventListener('click',function(){
    document.getElementById('d-section').classList.remove('hidden');
    document.getElementById('h-section').classList.add('hidden');
    
})

document.getElementById('historyButton').addEventListener('click',function(){
    document.getElementById('d-section').classList.add('hidden');
    document.getElementById('h-section').classList.remove('hidden');
   
})

document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href = '/blog.html';
})