<?php
include 'fbsdk/facebook.php';

define('FB_APP_ID', '611973886182543');
define('FB_APP_SECRET', '16987e6a8dbeb2b5ea2263e15c8755ee');

// initiate Facebook 
$facebook = new Facebook(array('appId' => FB_APP_ID, 'secret' => FB_APP_SECRET, 'cookie' => true, 'domain' => 'Daily_Tarot'));

// send notification
$fb_response = $facebook->api('{recipient_userid}/notifications', 'POST', array('access_token' => FB_APP_ID . '|' . FB_APP_SECRET, 'href' => 'index.html', 'template' => 'Ven y averigua tu suerte hoy!'));
if ($fb_response['success'] == false) { // in case of an error do something here }    
unset($facebook);