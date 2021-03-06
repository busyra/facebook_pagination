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

    var currently_loading = false

    var current_page = $("MAIN").data('current-page');
    console.log("Current page is: ", current_page);

    function get_next_page(){

        //Don't do anything if we're already requesting a page
        if(currently_loading) return
        currently_loading = true

        //Show loading
        $("#more-button").hide();
        $("#loading-text").removeClass("hidden");

        //Move to next page
        current_page++
        console.log("Now requesting page: ", current_page)

        $.ajax("", {
            method: "GET",
            data: {
                page: current_page
            },
            success: function(result){

                //Show our stories
                $(".stories").append(result)

                //Hide loading
                $("#more-button").show();
                $("#loading-text").addClass("hidden");

                //We're not loading anymore
                currently_loading = false

            }
        })

    }

    $("#more-button BUTTON").click(get_next_page)

    $(window).scroll(function(){

        var window_top = $(window).scrollTop()
        var window_height = $(window).height()
        var document_height = $(document).height();

        //console.log("To go: ", document_height - window_top - window_height)

        request_at = window_height * 4

        // If within 200px from the bottom
        if(document_height - window_top - window_height < request_at){
            get_next_page()
        }

    })

})