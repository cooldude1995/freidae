---
layout: default_others
title: Freidae Reach Us Page
---
<script type="text/javascript"> 
    setupRecaptcha();
    $(document).ready(function(){
        popup();
    });
    </script>

<div id="overlay">
    <div id="popup">
        <h4 style="text-align:center;">Sending Message<br></h4>
        <img src="/freidae/data/img/ajax-loader.gif" id="loading-indicator" >
    </div>
</div>
<form role="form" method="POST"  id="form_reach_us" data-success="Message successfully sent!">
    <div class="form-group">
        <label for="inputEmail" id="label_reachus">Got question or just drop a line and say hi!!</label>
        <input type="email" class="form-control" id="inputEmail" placeholder="Email" name="email" required autofocus>
    </div>
    <div class="form-group">
        <input type="text" class="form-control" id="inputSubject" placeholder="Subject" name="subject" required >
    </div>
    <div class="form-group">
        <select class="form-control" id="sel1" style="padding-left: 41%;padding-right: 23%;height: 56px;" name="category">
            <option>Category</option>
            <option>Comment</option>
            <option>Suggestion</option>
        </select>
    </div>
    <div class="form-group">
        <textarea class="form-control" rows="5" id="content" placeholder="Content" name="content" required ></textarea>
    </div>
    <div class="form-group g-recaptcha" data-sitekey="6LcLwAATAAAAAI1ssN3BesuD7qwOKtV7Dg227-tv" style="width: 23%;"></div>
    <div class="form-group" style="width: 71px;min-width: 71px;">
    <div id="notice" class="notice" data-captcha-failed="Incorrect captcha!" data-error="There was an error sending the message, please try again."></div>
        <button id="btn-submit" type="submit" class="btn" onclick="return setupRecaptcha();"><p style="text-align: center;">Submit</p></button>
    </div>
</form>
