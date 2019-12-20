$(function(){

  function buildHTML(message){
    if (message.image) {
      var html =  `<div class="message" data-message-id="${message.id}">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
                      </div>
                    </div>
                    <p class="lower-message__content">
                      ${message.content}
                      </p>
                        <img src=${message.image} class="lower-message.image">                   
                    </div>
                  </div>`
    } else {
      var html =  `<div class="message" data-message-id="${message.id}">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user_name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at}
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
      url: url,  
      type: 'POST',  
      data: formDate,  
      dataType: 'json',
      processData: false,
      contentType: false
    })

    
    .done(function(message){
      var html = buildHTML(message);
      $('.contents_main_message_text').append(html);
      $('.cnontents_main').animate({ scrollTop: $('.contents_main')[0].scrollHeight});
      $('.new_message')[0].reset();    
      $('.input-send').prop('disabled', false); 
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました')
    })
  })

  
  var reloadMessages = function () {
      last_message_id = $('.message:last').data("message-id");
   
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
      
    })
    

    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.contents_main_message_text').append(insertHTML);
      $('.contents_main').animate({ scrollTop: $('.contents_main')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('自動更新に失敗しました')
      
    });
  
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
  setInterval(reloadMessages, 5000);
  };
});

