$('title').text('360 Digital Studio');

$('.logo').html('<strong>360 Digital Studio</strong> at Virginia Tech');

$('.icons').html(`<li><a href="https://twitter.com/vt_360" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="https://giphy.com/channel/digitalstudio" class="icon fa-file"><span class="label">Twitter</span></a></li>
										<li><a href="mailto:digitalstudio@vt.edu" class="icon fa-envelope"><span class="label">Twitter</span></a></li>
	`)

$('#search').remove();

$('#menu').html(`
	<header class="major">
										<h2>Menu</h2>
									</header>

	<ul>
										<li><a href="index.html">Homepage</a></li>
										<li><a href="about_us.html">About us</a></li>
										<li><a href="online_consultations.html">Online Consultations</a></li>
										<li><a href="features.html">Features</a></li>
										<li>
											<span class="opener">Design</span>
												<ul>
													<li><a href="#">Doc Design</a></li>
													<li><a href="#">CARP</a></li>
												</ul>
										</li>



										<li>
											<span class="opener">Job Applications</span>
											<ul>
												<li><a href="#">Resume</a></li>
												<li><a href="#">Cover Letter</a></li>
											</ul>
										</li>
										<li>
											<span class="opener">Reports </span>
												<ul>
													<li><a href="#">Progress</a></li>
													<li><a href="#">Recommendation</a></li>
													<li><a href="#">Field / Informational</a></li>
												</ul>
										</li>

										<li>
											<span class="opener">Proposals</span>
												<ul>
													<li><a href="#">Goods & Services</a></li>
													<li><a href="#">Research</a></li>
												</ul>
										</li>
										
										
										<li><a href="about_us.html">Collaboration</a></li>
										<li><a href="about_us.html">How-To Videos</a></li>
										<li><a href="about_us.html">Helpful Links</a></li>
										<li><a href="elements.html">Elements</a></li>
									</ul>`);
document.getElementsByClassName('contact')[0].parentElement.querySelector('p').remove();

$('.fa-envelope-o').html('<a href="mailto:digitalstudio@vt.edu">digitalstudio@vt.edu</a>');

$('.fa-phone').remove();

$('.fa-home').html('360 Shanks<br> 404 Old Turner St, Blacksburg, VA 24060');

$('.copyright').html(`<p class="copyright">© 360 Digital Studio @ VT. All rights reserved. Template: <a href="https://html5up.net">HTML5 UP</a>.</p>`);
