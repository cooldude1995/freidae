---
layout: default_others
title: Freidae Home Page
---
<form role="form" method="POST" action="http://formspree.io/udbhav1995@gmail.com" id="form_reach_us" data-success="Message successfully sent!">
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
    <div class="form-group g-recaptcha" data-sitekey="6LeZnAATAAAAAOJ3yKx36w7PVQ324vz6T1BL8l9z"></div>
    <div class="form-group" style="width: 71px;min-width: 71px;">
    <div id="notice" class="notice" data-captcha-failed="Incorrect captcha!" data-error="There was an error sending the message, please try again."></div>
        <button id="btn-submit" type="submit" class="btn"><p style="text-align: center;">Submit</p></button>
    </div>
</form>
