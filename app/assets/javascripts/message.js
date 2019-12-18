$(function(){

  function buildHTML(message){
    if (message.image) {
      var html =  `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.updated_at}
                      </div>
                    </div>
                    <p class="lower-message__content">
                      ${message.content}
                      </p>
                        <img src=${message.image} class="lower-message.image">                   
                    </div>
                  </div>`
    } else {
      var html =  `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.updated_at}
                      </div>
                    </div>
                    <p class="lower-message__content">
                      ${message.content}
                      </p>
                    </div>
                  </div>`
    }
    return html
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formDate = new FormData(this);
    var url = $(this).attr('action');
  
    

    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formDate,  
      dataType: 'json',
      processData: false,
      contentType: false
    })

    
    .done(function(message){
      var html = buildHTML(message);
      $('.contents_main_message_text').append(html);
      $('.contents_main').animate({ scrollTop: $('.contents_main')[0].scrollHeight});
      $('.new_message')[0].reset();    
      $('.input-send').prop('disabled', false); 
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました')
    })
  })
})

