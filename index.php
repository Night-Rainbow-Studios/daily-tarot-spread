<? php
include 'fbsdk/facebook.php';

define('FB_APP_ID', '611973886182543');
define('FB_APP_SECRET', '16987e6a8dbeb2b5ea2263e15c8755ee');

// initiate Facebook 
$facebook = new Facebook(array('appId' => FB_APP_ID, 'secret' => FB_APP_SECRET, 'cookie' => true, 'domain' => 'DAILY_TAROT'));

// send notification
$fb_response = $facebook->api('/FACEBOOK-USER-UNIQUE-ID/notifications', 'POST', array('access_token' => FB_APP_ID . '|' . FB_APP_SECRET, 'href' => 'index', 'template' => 'Averigua tu futuro para hoy!'));
if ($fb_response['success'] == false) { // in case of an error do something here }    
unset($facebook);
echo '<!DOCTYPE html>';
echo '<html>';
echo '<head>';
echo '<meta charset="utf-8">';
echo '<meta charset="utf-8">';
echo '<meta property="og:url"           content="https://www.tarotgratis.best" />';
echo '<meta property="og:type"          content="website" />';
echo '<meta property="og:title"         content="Daily Tarot spread" />';
echo '<meta property="og:description"   content="Learn about your future" />';
echo '<meta property="og:image"         content="diaryshare.png" />';
echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
echo '<meta name= "author" content="Night Rainbow Studios"/>';
echo '<script src="https://connect.facebook.net/en_US/fbinstant.6.2.js"></script>';
echo '<script src="game.js"></script>';
echo '<script src="graph.js"></script>';
echo '<title>Daily Tarot spread</title>';
echo '<link rel="stylesheet" href="styles.css">';
echo '</head>';
echo '<body>';
echo '<script>';
echo 'window.fbAsyncInit = function() {';
echo 'FB.init({';
echo 'appId      : '611973886182543',';
echo 'xfbml      : true,';
echo 'version    : 'v8.0'';
echo '});';
echo 'FB.AppEvents.logPageView();';
echo '};';
echo '';
echo '(function(d, s, id){';
echo 'var js, fjs = d.getElementsByTagName(s)[0];';
echo 'if (d.getElementById(id)) {return;}';
echo 'js = d.createElement(s); js.id = id;';
echo 'js.src = "https://connect.facebook.net/en_US/sdk.js";';
echo 'fjs.parentNode.insertBefore(js, fjs);';
echo '}(document, 'script', 'facebook-jssdk'));';
echo '</script>';
echo '';
echo '<h1> <p id=name></p>¿Que dicen las cartas sobre ti?</h1>';
echo '<h2>¡Averigualo!</h2>';
echo '<a class="link" href=".\animation\diary.html" id="diario">Diario</a>';
echo '<a class="link" href=".\animation\lovetarot.html" id="amor">Tarot del amor</a>';
echo '<a class="link" href=".\animation\love.html" id="amor">Test de amor</a>';
echo '<a class="link" href=".\animation\diary.html" id="suerte">Para tu suerte</a>';
echo '<a class="link" href=".\animation\diary.html" id="futuro">Planes a futuro</a>';
echo '<script type="text/javascript">';
echo 'const buttons = document.querySelectorAll('a');';
echo 'buttons.forEach(btn => {';
echo 'btn.addEventListener('click', function(e) {';
echo '';
echo 'let x = e.clientX = e.target.offsetLeft;';
echo 'let y = e.clientY = e.target.offsetTop;';
echo '';
echo 'let ripples = document.createElement('span');';
echo 'ripples.style.left = x = 'px';';
echo 'ripples.style.top = y = 'px';';
echo 'this.appendChild(ripples);';
echo '';
echo 'setTimeout(() =>{';
echo 'ripples.remove()';
echo '},1000);';
echo '})';
echo '})';
echo '</script>';
echo '';
echo '</body>';
echo '</html>';
?>