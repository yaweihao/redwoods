function mailTo(person) {
   var who = {
           tom: 'tom * grandine . org',
           alex: 'a_s_gold * hotmail . com',
           mike: 'margaux56 * aol . com',
           tatyana: 'tat ya na * every day creative . net',
           steve: 'swim guy 24 * gmail . com',
           list: ' mi - redwoods - request * freelists . org'
       };
    function email(str) {
        var target = who[str] || str;
        return target.replace(/\s+/g,'').replace(/\*/,'@');
    }
    return 'mailto:' + email(person);
}

Vue.component('home-panel',{
    name: 'HomePanel',
    template: '#home-template',
    methods: {
        mailto: function(who) {
            return mailTo(who);
        }
    }
});
Vue.component('coaches-panel',{
    name: 'CoachesPanel',
    template: '#coaches-template',
    data: function() {
        return {
            coachTmo: null,
            coaches: [
                {
                    active: false,
                    email: 'coach.dwyoung@gmailo.com',
                    firstName: 'Derek',
                    img: './images/coaches/swimcoach.gif',
                    inits: 'DY',
                    lastName: 'Young',
                    quote: '"Derek moved to Seattle in April of 2018. Immediately prior to moving, Derek served as the Head Coach of the Sandhills Sand Sharks in Southern Pines, North Carolina and started the Masters swim program in Southern Pines. Before that he spent three years with Nation\'s Capital Swim Team (NCAP) and the Arlington Aquatic Club. During his eight years on deck he has worked with swimmers of all ages and achievement levels.  <br><br> Derek\'s swimming career started in the Northern Virginia Swim League (NVSL) when he was 6 years old with an ill-fated relay appearance for the Lincolnia Park Lazers. In addition to his local summer league team, Derek also swam for the Arlington Aquatic Club for 10 years. In 2000, Derek graduated with a degree in marketing from the University of Maryland. At Maryland he was a member of the varsity swim team and letter winner."'
                },
                {
                    active: false,
                    email: 'tom@grandine.org',
                    firstName: 'Tom',
                    img: './images/coaches/TomG.png',
                    inits: 'TG',
                    lastName: 'Grandine',
                    quote: '"I\'ve been swimming seriously since I was a middle schooler, and my love for the sport and the activity only seems to grow with time. I\'ve been swimming with the Redwoods since 2003, and I\'ve enjoyed firsthand the amazing health benefits that accrue to middle-aged folk like me when they keep at it and keep in the water, and I have no plans to let up anytime soon. It\'s really true that life begins at 50!"',
                },
                {
                    active: false,
                    email: 'margaux56@aol.com',
                    firstName: 'Mike',
                    img: './images/coaches/MikeS.png',
                    inits: 'MS',
                    lastName: 'Schaeffer',
                    quote: '"I made a late return to swimming in my 40s after a 20+ year hiatus, swimming in the slow lane at Redwoods workouts until I graduated up to swim next to (not <em>with</em>!) the big boys. Both of my children grew up swimming summer league at Mercerwood, and my daughter Katie went on to a career at the University of Washington. You can count on my workouts to be, umm, <em>interesting</em>."',
                },
                {
                    active: false,
                    email: 'alex_s_goldstein@hotmail.com',
                    firstName: 'Alex',
                    img: './images/coaches/AlexG.png',
                    inits: 'AG',
                    lastName: 'Goldstein',
                    quote: '"Spoiled by the bath-like water temperatures of the South, I always try to keep moving and ignore suggestions that another 10 pounds is worth at least 2-3 degrees in water temp. I coached age group and master swim teams when younger but am now (somewhat) reconciled to the fact that youth will beat me in open water races and in the pool. Now get moving, just standing here watching you is making me cold!."',
                },
                {
                    active: false,
                    email: 'tomrobt@u.washington.edu',
                    firstName: 'Tom',
                    img: './images/coaches/TomR.png',
                    inits: 'TR',
                    lastName: 'Robertson',
                    quote: '"I was a collegiate swimmer of modest ability in the early 60\'s, diverted to marathon running for about 15 years, and returned to swimming with a couple of the original Redwoods about the same time that it became clear that both of my daughters were going to be far faster swimmers than I could ever hope to be. I\'m a pulmonary doc at the UW with a professional hobby in the study of exercise physiology. I am now the oldest of the current Redwoods, and use myself as a subject in the study of loss of exercise capacity with aging."',
                },
                {
                    active: false,
                    email: 'a.d.dingle@comcast.net',
                    firstName: 'Adair',
                    img: './images/coaches/AdairD.png',
                    inits: 'AD',
                    lastName: 'Dingle',
                    quote: '"I started masters swimming in my early 20s. I\'ve been enjoying the camaraderie of the Redwoods since its inception, and have been attempting to acquire some body rotation for about that long too. Fin-addicted with a strong preference for backstroke, I love our morning workouts, especially when they are outdoors. As a coach, I tend to give long freestyle sets."',
                },
                {
                    active: false,
                    email: 'qglaze@gmail.com',
                    firstName: 'Q',
                    img: './images/coaches/QG.png',
                    inits: 'QG',
                    lastName: 'Glaze',
                    quote: '"Q Glaze, coach <em>extraordinaire</em>, honed her coaching skills under the tutelage of Midlakes\' finest coaches of the 60\'s and 70\'s. Since recently returning to the coaching scene, she was stunned to learn that making athletes swim ungodly distances and the taking of steroids were no longer considered cutting edge training methods.<br><br>Not to worry. This is a masters group and she has adjusted her techniques. She promises not to make anyone swim longer than a 500 against their will. Her new motto is <em>you pay to do this, you can do whatever you want</em>."',
                },
                {
                    active: false,
                    email: 'swimguy24@gmail.com',
                    firstName: 'Steve',
                    img: './images/coaches/SteveS.png',
                    inits: 'SS',
                    lastName: 'Sussex',
                    quote: '"I grew up swimming in the Los Angeles area, where I could ride my unicycle a few blocks to an outdoor pool and swim in the sun. But that wasn\'t good enough, so I enrolled at the UW to ride my bike in the rain to morning workouts, indoors! And I\'ve been here ever since, swimming with various masters groups throughout the years. For swim workouts, I personally like aerobic sets, like 20 x 100\'s. But when I coach, I like to write workouts that my friends would like to swim.  I love swimming with paddles, and the Redwoods\' Friday morning coffee at Starbucks."<br><br><em>[Editor\'s note: In the late \'90s, Steve won his age group in the 400 meters at the Worlds Masters Championship, and we\'re very proud of him. He won\'t ever tell you, so we will.]</em>',
                },
                {
                    active: false,
                    email: 'steven.l.underbrink@boeing.com',
                    firstName: 'Steve',
                    img: './images/coaches/SteveU.png',
                    inits: 'SU',
                    lastName: 'Underbrink',
                    quote: 'Stay tuned!',
                },
                {
                    active: false,
                    email: 'woodswim1@gmail.com',
                    firstName: 'Shannon',
                    img: './images/coaches/ShannonM.png',
                    inits: 'SM',
                    lastName: 'McIntyre',
                    quote: 'Coach Shannon began her swimming career in Southern California in 1980. Her accolades and honors include:<ul><li>Top 25 World Rankings in 1982 in the 100 and 200 M Breaststroke</li><li>1984 Olympic Trial Qualifier in the 100 and 200 M Breaststroke</li><li>Division I NCAA college swimmer 1983 &mdash; 1986.</li><li>2014 Fat Salmon 3.2 mi Open Water Swim 1st Pl AG, 1st Pl Overall</li> <li>2015 National Record US Masters Swimming US Postal 4 x 5000 M</li> <li>2015 USMS National Postal 5000 M swim 2nd in Age Group</li> <li>2015 USMS Nationals 4 Golds: 400 IM, 200 IM, 200 Breast, 400 Free</li> <li>2015 FINA USMS World Ranking</li></ul>'
                },
            ]
        };
    },
    methods: {
        coachClass: function(coach) {
            return 'coach ' + coach.inits + (coach.active ? ' active' : '');
        },
        title: function(coach) {
            return 'click for ' + coach.firstName + '\'s bio';
        },
        email: function(coach) {
            return mailTo(coach.email);
        },
        mailto: function(coach) {
            return mailTo(coach.email);
        },
        coachName: function(coach) {
            return [coach.firstName + coach.lastName].join(' ');
        },
        toggle: function(coach) {
            var vue = this,
                count = 0,
                text,
                textLength,
                elm,
                shadowElm = vue.$el.querySelector('.quoteShadow'),
                isActive = coach.active;

            function addText() {
                var char = text.charAt(count);
                if (char == '<') {
                    while (text.charAt(count) != '>' && count < textLength) count++;
                }
                elm.innerHTML = shadowElm.innerHTML = text.substr(0, count);
                count++;
                if (count < textLength) {
                    vue.coachTmo = setTimeout(addText,10);
                } else {
                    vue.coachTmo = setTimeout(function() {
                        vue.toggle(coach);
                    },10000);
                }
            }
            vue.coaches.forEach(function(coach) {
                coach.active = false;
            });
            if (vue.coachTmo) {
                clearTimeout(vue.coachTmo);
            }
            vue.coachTmo = null;
            shadowElm.innerHTML = '';

            coach.active = !isActive;
            if (coach.active) {
                setTimeout(function() {
                    elm = vue.$el.querySelector('.active .coachQuote');
                    elm.innerHTML = shadowElm.innerHTML = '';
                    text = coach.quote;
                    textLength = text.length;
                    vue.$nextTick(addText);
                },10);
            }
        }
    }
});
Vue.component('schedule-panel',{
    name: 'SchedulePanel',
    template: '#schedule-template',
});
Vue.component('faq-panel',{
    name: 'FAQPanel',
    template: '#faq-template',
    methods: {
        toggleActive: function(ans) {
            var vue = this;
            var clas = ans.clas.split(' '),
                ix = clas.indexOf('active');
            if (ix < 0) {
                clas.push('active');
            } else {
                clas.splice(ix,1);
            }
            ans.clas = clas.join(' ');
            return ans.clas;
        }
    },
    data: function() {
        return {
            qas: [
                {
                    q: 'How much does it cost to swim?',
                    a: {
                        clas: 'costs',
                        html: 'You can choose to pay quarterly if you plan to swim full-time, by the month, or by punch card. Quarterly and monthly MSC members pay a <span class="msc">reduced amount</span>.  <span class="line"><span class="term">Quarterly</span><span class="cost">$350/<span class="msc">$175</span></span></span> <span class="line"><span class="term">Monthly</span><span class="cost">$130/<span class="msc">$65</span></span></span> <span class="line note">You can drop-in for any individual workout for <b>$13</b>; prepayment for multiple workouts is available.</span> <span class="line note">Young Masters (35 and under) can join for a quarterly rate of <b>$270</b>, or a monthly rate of <b>$100</b>.</span>'
                    },
                },
                {
                    q: 'I\'m planning to be gone for an entire month. Can I just pay 2/3 of a quarterly bill?',
                    a: {
                        clas: '',
                        html: 'We\'re not planning to kick people off the team for serially quitting and rejoining. That said, it\'s important to realize that there will be no long term benefit to playing those sorts of games. For example, if all of our members only paid for 11 months of MIR membership a year, we\'d have to set monthly rates at 109.1% of what they would be if everyone just paid for 12 months in order to pay our bills. Everyone ends up paying the exact same annual total anyway, it just makes budgeting and planning harder. The best way to keep rates low is for everyone to commit to being in it for the long haul so that we can plan lower rates for everyone without having to worry about contingency funds for when people periodically drop out for short periods.'
                    }
                },
                {
                    q: 'Who are the coaches?',
                    a: {
                        clas: '',
                        html: 'We <!--are currently honored to have Derek Young run 4 weekly workouts; on Wednesdays we--> depend many of our own members to spend an occasional morning coaching rather than swimming. We\'d love to see you on deck if you\'re game. You\'re free to invent your own workout, or one will be provided for you if you\'d rather be more engaged as coach than as workout writer.<br/><br/> <a target="_blank" href="https://www.signupgenius.com/go/10c0d49aea922a4f9cf8-coaching">Sign up here!</a><!--Read more about all of our coaches <a href="#coaches" rel="coaching" class="navItem">here</a>.-->'
                    }
                },
                {
                    q: 'Are guests welcome?',
                    a: {
                        clas: '',
                        html: 'By all means, yes. Those of you who haven\'t committed to swim with us regularly, but would nevertheless like to make appearances at our workouts from time to time, are welcome to do so. Please feel free to swim with us as often as you\'d like. The drop-in fee for guest swimmers is $13; please leave that with the coach on deck as you enter.'
                    }
                },
                {
                    q: 'Is USMS registration required?',
                    a: {
                        clas: '',
                        html: 'Yes! USMS provides local teams like ours with the liability insurance coverage required by MSC, our host pool (as any other pool-renting facility requires). The <em>certificate of liability insurance</em> is provided by USMS free of charge, but only if all of our team members are also USMS members in good standing. There are plenty of other benefits to USMS membership; if you aren\'t already a member, you can register online at <a href="http://www.usms.org/reg/" target="_blank">www.usms.org</a>.'
                    }
                },
                {
                    q: 'When are fees due?',
                    a: {
                        clas: '',
                        html: 'Please arrange to pay for your membership at the beginning of each quarter.  Make your check payable to <em>Mercer Island Redwoods</em> and deliver it to Tom Grandine or Mike Schaeffer at practice; or use <a target="_blank" href="https://venmo.com/Thomas-Grandine">Venmo</a>. Non-MSC members pay $350/quarter; MSC members pay $175/quarter.'
                    }
                },
                {
                    q: 'What happens on holidays?',
                    a: {
                        clas: '',
                        html: 'Normally, practices are scheduled for Monday-Friday mornings, regardless of whether or not it\'s a holiday. Check with the coach, or Tom Grandine or Alex Goldstein at practice as each holiday draws near in case there are any exceptions<!--; or check the workout/coaching schedule <a href="#schedule" rel="calendar" class="navItem">here</a>-->.'
                    }
                },
            ]
        };
    }
});
Vue.component('contact-panel',{
    name: 'ContactPanel',
    template: '#contact-template',
    data: function() {
        return {
            who: {
                tom: 'tom @ grandine . org',
                mike: 'margaux56 * aol . com',
                tatyana: 'tat ya na * every day creative . net',
                steve: 'swim guy * gmail . com',
                list: ' mi - redwoods - request * freelists . org'
            }
        };
    },
    methods: {
        mailto: function(who) {
            return mailTo(who);
        }
    }
});

(function() {

    function buildVue() {
        var vue;

        window.mirVue =
        vue = new Vue({
            name: 'mirVue',
            mounted: function() {
                var vue = this,
                    hash = document.location.hash.slice(1);
                if (hash.length > 0) {
                    vue.navTo(null,hash);
                }
                window.onhashchange = function(e) {
                    var locx = e.newURL.lastIndexOf('#'),
                        loc = e.newURL.slice(locx+1);
                    vue.navTo(e,loc);
                };
            },
            data: {
                active: 'home',
                actions: [
                    {href: '#home', name: 'Home'},
                    // {href: '#coaches', name: 'Coaches'},
                    // {href: '#schedule', name: 'Schedule'},
                    {href: '#faq', name: 'FAQ'},
                    {href: '#contact', name: 'Contact'}
                ]
            },
            template: '#content-template',
            el: '#main-content',
            methods: {
                isActive: function(action) {
                    var vue = this;
                    return action.name.toLowerCase() === vue.active ? 'active' : '';
                },
                navTo: function(e,page) {
                    var vue = this,
                        actName = function(loc) {
                            return loc.replace(/^#/,'');
                        },
                        pageName = actName(page),
                        actions = vue.actions.map(function(action) {
                            return actName(action.href);
                        });

                    if (actions.indexOf(pageName) > -1) {
                        vue.active = pageName;
                    }

                }
            },
        });
    }
    document.addEventListener('DOMContentLoaded', function() {
        var fakeElm = {textContent: null, addEventListener: function() {}};
        var fCY = document.querySelector('#footerCopyrightYear') || fakeElm,
            lda = document.querySelector('#lda') || fakeElm;

        fCY.textContent = (new Date()).getFullYear();
        lda.addEventListener('click',function(e) {
            var desc = document.querySelector('#lda > span');
            desc.classList.add('show');
            setTimeout(function() {desc.classList.remove('show');},6000);
        });
    });
    buildVue();
}());
