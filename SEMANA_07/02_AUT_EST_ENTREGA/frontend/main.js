$(document).ready(() => {
    $(".info-btn").click(() => {
      $(".pessoal").toggleClass("pessoal-active");
      $(".carreira").toggleClass("carreira-active");
    });
  
    $.get("/caracteristicas", function (res) {
      console.log(res);
      res.map((data) => {
        $("#personalidade").append(
          $(`
              <li class="pessoal-info">
                  <p id="titulo">${data.titulo}</p>
                  <div style="display: flex; flex-direction: row;">
                      <p class="value">${data.nivel}</p>
                  </div>
              </li>
          `)
        );
    });})

    $('button').click(() => {
        let title = $('#titleText').val()
        let nivel = Number($('#nivelText').val())

        console.log(nivel);

        $.post('/caracteristicas/add', {
            titulo: title,
            nivel: nivel,
            candidato_id: 1,
        }, (res) => console.log(res))
    })
        
  });
  
  