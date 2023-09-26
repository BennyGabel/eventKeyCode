const insert = document.getElementById('insert')


/* 
NOTES
1)  If the user enters ' ' will replace it for the word 'Space'   
2)  keyCode appears strike-through because it is deprecated, but will still work   
*/

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key}     
  <small>event.key</small>
</div>

<div class="key">                                
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `
})