// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery2
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).on("ready page:load", function(){

    $("#more-button BUTTON").click(function(){

        //Show loading
        $("#more-button").hide();
        $("#loading-text").removeClass("hidden");

        $.ajax("", {
            method: "GET",
            data: {
                page: 2
            },
            success: function(result){

                //Show our stories
                $(".stories").append(result)

                //Hide loading
                $("#more-button").show();
                $("#loading-text").addClass("hidden");

            }
        })

    })

})