function declOfNum(number, titles) {
    cases = [2, 0, 1, 1, 1, 2];
  number = Math.abs(number);
    return titles[
        number % 100 > 4 && number % 100 < 20
    ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
};
var remainingTime = 60;
var timer;
var isStopped = true;

const renderTime = () => {
    $('#timer').addClass("text");
    remainingTime = remainingTime - 1;
    var txt =
        "Повторная отправка через " +
        remainingTime +
        " " +
        declOfNum(remainingTime, ["секунду", "секунды", "секунд"]);
        $("#timer .hidden-text p").html(txt);

        if (remainingTime === 0) {
            isStopped = true;
            clearInterval(timer);
            $('#timer').removeClass("text");
            remainingTime = 60;
            $("#timer .hidden-text p").html("Повторная отправка через 60 секунд");
          return
        }
};

const startTimer = () => {
    if (isStopped) {
        isStopped = false;
        $(".timer-text").html("До повторной отправки 60 секунд");
        timer = setInterval(renderTime, 1000);
    }
};
//startTimer(); - оставляем если нужно чтобы при загрузке страницы автоматически шел отсчет
$(".hidden-btn button").click(startTimer);
