$(function () {
    $('#modalToggle').click(function() {
      $('#modal').modal({
        backdrop: 'static'
      });
    });
    var part = 2;
    var width = 40;

    $('#ContinueSifr').click(function (e) {
      e.preventDefault();
      
      $('.progress-bar').css('width', width.toString() +'%');
      $('.progress-bar').html('Step '+ part.toString() +' of 5');

      if (part == 2) {
        $('#myTab a[href="#ads"]').tab('show');
        part = part + 1;
        width = width + 20;
    } else if (part == 3){
        $('#myTab a[href="#placementPanel"]').tab('show');
        part = part + 1;
        width = width + 20;
    }
    else if (part == 4){
        $('#myTab a[href="#schedulePanel"]').tab('show');
        part = part + 1;
        width = width + 20;
        document.getElementById("ContinueSifr").innerHTML="Šifruj";
        document.getElementById("ContinueSifr").classList.remove('btn-secondary');
        document.getElementById("ContinueSifr").classList.add('btn-primary');
    }
    else if (part == 5){
        $('#myTab a[href="#reviewPanel"]').tab('show');
        part = part + 1;
        width = width + 20;
        document.getElementById("ContinueSifr").style.visibility = 'hidden';

    }

    });
  
    $('#adsContinue').click(function (e) {
      e.preventDefault();
      $('.progress-bar').css('width', '60%');
      $('.progress-bar').html('Step 3 of 5');
      $('#myTab a[href="#placementPanel"]').tab('show');
    });
  
    $('#placementContinue').click(function (e) {
      e.preventDefault();
      $('.progress-bar').css('width', '80%');
      $('.progress-bar').html('Step 4 of 5');
      $('#myTab a[href="#schedulePanel"]').tab('show');
    });
  
    $('#scheduleContinue').click(function (e) {
      e.preventDefault();
      $('.progress-bar').css('width', '100%');
      $('.progress-bar').html('Step 5 of 5');
      $('#myTab a[href="#reviewPanel"]').tab('show');
    });
    
    $('#activate').click(function (e) {
      e.preventDefault();
      var formData = {
        campaign_name: $('#campaignName').val(),
        start_date: $('#start-date').val(),
        end_date: $('#end-date').val(),
        days: {
          sunday: $('#sunday').prop('checked'),
          monday: $('#monday').prop('checked'),
          tuesday: $('#tuesday').prop('checked'),
          wednesday: $('#wednesday').prop('checked'),
          thurday: $('#thursday').prop('checked'),
          friday: $('#friday').prop('checked'),
          saturday: $('#saturday').prop('checked'),
        },
        start_time: $('#start-time').val(),
        end_time: $('#end-time').val()
      }
      alert(JSON.stringify(formData));
    })
  })


  $(document).ready(function() {
    $('.next input').keyup(function() {

        var empty = false;
        console.log('checking')
        $('.next input').each(function() {
            if ($(this).val().length == 0) {
                empty = true;
            }
        });

        if (empty) {
            $('button').attr('disabled', 'disabled');
        } else {
            $('button').removeAttr('disabled');
        }
    });

    $('input[type=file]').change(function(){
        if($('input[type=file]').val()==''){
            $('button').attr('disabled',true)
        } 
        else{
          $('button').attr('disabled',false);
        }
    })
});