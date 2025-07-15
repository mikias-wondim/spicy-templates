import React, { useState } from "react";

const faqItems = [
  {
    id: "faq-1",
    question: "Does Churn Buster charge a fee for recovered payments?",
    answer:
      "When the lead is ready to meet, our appointment setter suggests them free slots from your calendar and sets up the meeting. Before the call itself, we ping the lead to confirm the appointment. If they still haven’t showed up, we follow up on them and offer to reschedule, until they are available to meet.",
  },
  {
    id: "faq-2",
    question: "How does this compare to Recharge built-in features?",
    answer:
      "When the lead is ready to meet, our appointment setter suggests them free slots from your calendar and sets up the meeting. Before the call itself, we ping the lead to confirm the appointment. If they still haven’t showed up, we follow up on them and offer to reschedule, until they are available to meet.",
  },
  {
    id: "faq-3",
    question: "What’s setup like? Do I have time for this?",
    answer:
      "When the lead is ready to meet, our appointment setter suggests them free slots from your calendar and sets up the meeting. Before the call itself, we ping the lead to confirm the appointment. If they still haven’t showed up, we follow up on them and offer to reschedule, until they are available to meet.",
  },
  // Add the rest of the FAQ items here
];

const DigitalMarketingAgencyFaq = () => {
  return (
    <div className="section-space bgc-dark-1">
      <div className="section-space--sm-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <h3 className="heading-3 clr-white text-center">
                Frequently Asked <span className="clr-red">Questions</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row g-4 gy-5">
          <div className="col-lg-6 col-xl-7">
            <span className="d-inline-block font-weight-semibold padding-y-1 padding-x-8 rounded-2 margin-bottom-8 bgc-dark-2 clr-white fs-14 text-center">
              FAQ
            </span>
            <div className="faq-list-group list-group gap-5">
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white active"
                data-bs-toggle="list"
                href="#faq-1"
              >
                Does Churn Buster charge a fee for recovered payments?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-2"
              >
                How does this compare to Recharge built-in features?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-3"
              >
                What’s setup like? Do I have time for this?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-4"
              >
                How does this compare to Recharge built-in features?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-5"
              >
                How does this compare to Recharge built-in features?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-6"
              >
                How does this compare to Recharge built-in features?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-7"
              >
                How does this compare to Recharge built-in features?
              </a>
              <a
                className="faq-list d-block border border-stroke-clr-2 rounded-3 fs-20 font-weight-semibold padding-y-5 padding-x-10 clr-text-1 :clr-text :bgc-white"
                data-bs-toggle="list"
                href="#faq-8"
              >
                How does this compare to Recharge built-in features?
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-xl-5">
            <span className="d-inline-block font-weight-semibold padding-y-1 padding-x-8 rounded-2 margin-bottom-8 bgc-danger clr-white fs-14 text-center">
              Ans
            </span>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="faq-1">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="faq-2">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="faq-3">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="faq-4">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="faq-5">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="faq-6">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="faq-7">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
              <div className="tab-pane fade" id="faq-8">
                <div className="border border-red-clr rounded-4 padding-5 padding-xl-10 position-relative z-1">
                  <p className="clr-white fs-18">
                    When the lead is ready to meet, our appointment setter
                    suggests them free slots from your calendar and sets up the
                    meeting. Before the call itself, we ping the lead to confirm
                    the appointment.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18">
                    If they still haven’t showed up, we follow up on them and
                    offer to reschedule, until they are available to meet.
                  </p>
                  <p className="clr-white fs-18 mb-0">
                    Collaboratively formulate dynamic users rather than
                    alternative action items. Authoritatively extend
                    standardized benefits and diverse platforms. Assertively
                    benchmark end-to-end services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingAgencyFaq;
