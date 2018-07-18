console.log('debug cumbriaactionforsustainability.js');

var result_html = "";
$.ajax({url: jspath + "reports/carboncoop/carboncoop.html", async: false, cache: false, success: function (data) {
        result_html = data;
    }});
$('#content').html(result_html);

$.ajax({
    url: jspath + "reports/carboncoop/carboncoop.js",
    dataType: 'script',
    async: false
});


function cumbriaactionforsustainability_initUI() {
   carboncoop_initUI();
}

function cumbriaactionforsustainability_UpdateUI() {
    carboncoop_UpdateUI();

// Insert Carbon Co-op logo
    $('#logo-in-report').attr("src", path + "Modules/assessment/reports/cumbriaactionforsustainability/img/CAfS_Logo_CMYK.jpg").attr('alt', 'Carbon Co-op logo');


// Specific report content for CAfS
    $('h1.doc-title-org').html('Cumbria Action for Sustainability')
    $('.org-name').html('CAfS');

// CSS for CAfs
    $('#print-css').append("@media print{\n\
                .carbon-report-wrapper .doc-title-wrapper{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper .top-border-title{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper .section-title{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper #performace-summary-key{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper .sap-table{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper .right-align-item-list li{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper th{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper td{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper .measures-list>table{border-color: rgb(161,205,68)}\n\
                .carbon-report-wrapper .three-col-table thead th:after,\n\
                .carbon-report-wrapper .three-col-table thead th:before\n\
                    {background:rgb(161,205,68)}\n\
                .carbon-report-wrapper .js-measures1-summary th, .carbon-report-wrapper .js-measures1-summary td,\n\
                .carbon-report-wrapper .js-measures2-summary th, .carbon-report-wrapper .js-measures2-summary td,\n\
                .carbon-report-wrapper .js-measures3-summary th, .carbon-report-wrapper .js-measures3-summary td\n\
                    {border-color: rgb(161,205,68);}\n\
            }");

// Logos in cover page
    $('#extra_logo').attr("src", path + "Modules/assessment/reports/cumbriaactionforsustainability/img/CAfS_Logo_CMYK.jpg").attr('alt', 'Cumbria Action for Sustainability logo').css('width', '150px');
    $('#cover').append('<img id="bgltr_logo" class="printable-inline" style="margin-left: 150px; width: 100px;" src="' + path + 'Modules/assessment/img-assets/hi_big_e_min_blue.jpg" />')

// Extra info in cover page
    var to_append = '<p class="printable" style="font-size:14px;margin-top:50px">Your report is provided by Cumbria Action for Sustainability (CAfS) with funding from The Big Lottery. It is produced in partnership with Carbon Coop, who provide the accredited audit framework along with targets included in the report. </p>';
    to_append += "<p class='printable' style='font-size:12px; text-align:center'>Cumbria Action for Sustainability - Eden Rural Foyer, Old London Road, Penrith, CA11 8ET - 01768 210 276 - www.cafs.org.uk <br />Registered Charity Number: 1123155</p>";
    $('#cover').append(to_append)

// Adjust size of title in first page to fit the logo
    $('#logo-in-report').css('margin-top', '100px');
    $('#print-css').append("@media print{\n\
                .doc-sub-title.MHEP{font-size:30px}\n\
                h1.doc-title-org{font-size:30px}\n\
                .doc-title-wrapper.doc-title{margin-bottom:50px}\n\
            }");

// Contact for questions
    $('#contact-for-questions').html('andrew@cafs.org.uk');

// Section 3.0
    $('#section-3-title').html('How can CAfS help?');
    $('#section-3-how-can-we-help').html("<p>Cumbria Action for Sustainability (CAfS) is a charity based in Penrith who work with individuals, businesses and communities to help them become more sustainable.</p>\n\
            <p>CAfS promotes low carbon living, energy saving and reduced use of fossil fuels, by providing energy and weather resilience audits, information, advice and motivation through  site visits, practical projects and training.</p>\n\
            <p>When taking things forward in your home it is important to realise there are no one-size-fits-all solutions. Some people employ professionals to oversee recommended improvements, others carry out he work on a DIY basis. Some plan for one big project to achieve everything, others work in stages, incrementally over years.</p>\n\
            <p>Whatever way you decide to progress, there are a number of ways CAfS can help you with further information and advice.</p>");
    $('#section-3-available-to-title').html('3.1 Available to you');
    $('#section-3-available-to').html('<p><strong>Talks and training</strong><br />We host talks, short and multi-day training courses in effective retrofitting. These are led by experts in the field, often local architects and other building professionals who are experienced with working with Cumbrian properties and helping householders tackle extreme weather and flooding issues along with energy efficiency improvements. Our courses have proven effective in providing specialist information and enabled delegates to obtain trusted and independent information.</p>\n\
            <p><strong>CAfS Greenbuild Festival</strong><br />Held in September each year our programme of events across Cumbria provides a valuable opportunity to see retrofit projects in action, many in progress, others complete. It\'s a great opportunity to speak with householders about effectiveness of improvements, materials, installation, costs and lessons learned.</p>\n\
            <ul style="margin:0 30px 30px"><li style="font-size:16px">Visit low-energy homes & buildings</li><li style="font-size:16px">See renewables in action</li><li style="font-size:16px">Explore sustainable living</li><li style="font-size:16px">Join talks, workshops & training</li></ul>\n\
            <p>See www.cafs.org.uk/events for details of upcoming events you can attend.</p>');
    $('#carbon-coop-services').html('');
    $('#section-3-3').html('');
    $('#section-3-4').html('');

}

