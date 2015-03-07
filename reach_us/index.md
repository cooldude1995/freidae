---
layout: default_others
title: Freidae Reach Us Page
---

<div id="overlay">
    <div id="popup">
        <h4 id="sndg-msg-rchus" style="text-align:center;">Sending Message<br></h4>
        <img src="/freidae/data/img/reach_us/ajax-loader.gif" id="loading-indicator-rchus" >
        <div id="reachus_message" class="notice" data-captcha-failed="Incorrect captcha!" data-error="There was an error sending the message, please try again." data-success="Message successfully sent!"></div>
    </div>
</div>
<form role="form" method="POST"  id="form_reach_us" >
    <div class="form-group">
        <label for="inputEmail" id="label_reachus">Got question or just drop a line and say hi!!</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Email" name="email" required autofocus>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" id="inputSubject" placeholder="Subject" name="subject" required >
    </div>
    <div class="form-group">
        <select class="form-control" id="sel1" style="padding-left: 41%;padding-right: 23%;height: 56px;" name="category">
            <option>General</option>
            <option>Request Clarification</option>
            <option>Report Issue</option>
            <option>Request Product Features</option>
        </select>
    </div>
    <div class="form-group">
        <textarea class="form-control" rows="5" id="content" placeholder="Content" name="content" required ></textarea>
    </div>
    <div class="form-group g-recaptcha" data-sitekey="6LcLwAATAAAAAI1ssN3BesuD7qwOKtV7Dg227-tv" style="width: 23%;"></div>
    <div class="form-group" style="width: 71px;min-width: 71px;">
        <button id="btn-submit" type="submit" class="btn" onclick="return false;"><p style="text-align: center;">Submit</p></button>
    </div>
</form>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" async defer></script>
        <script type="text/javascript" src="/freidae/data/js/recaptcha.js" async defer></script>
        <script type="text/javascript" src="/freidae/data/js/popup.js" async defer></script>