<template>
  <div id="message" class="messageDr">
    <!-- core-rail -->
    <!-- <div class="msg-messaging-container neptune-grid two-column display-flex">
      <div class="core-rail msg-messaging-container__core-rail relative display-flex" role="main">
        <div class="msg-conversations-container display-flex">
          <div class="msg-conversations-container__header relative">
            <div class="msg-conversations-container__title-row">
              <h1 class="flex-grow-1 ph4 t-16 t-black t-bold">Messaging</h1>
              <a
                data-control-name="compose_message"
                title="Compose a new message"
                href="/messaging/thread/new/"
                id="ember1351"
                class="active ember-view artdeco-button artdeco-button--tertiary artdeco-button--circle mr1"
              >
                <li-icon type="compose-icon" role="img" aria-label="Compose a new message">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path
                      d="M17 13.75l2-2V20a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1h8.25l-2 2H5v12h12v-5.25zm5-8a1 1 0 01-.29.74L13.15 15 7 17l2-6.15 8.55-8.55a1 1 0 011.41 0L21.71 5a1 1 0 01.29.71zm-4.07 1.83l-1.5-1.5-6.06 6.06 1.5 1.5zm1.84-1.84l-1.5-1.5-1.18 1.17 1.5 1.5z"
                    />
                  </svg>
                </li-icon>
              </a>
              <div
                id="ember1352"
                class="mr2 artdeco-dropdown artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
              >
                <button
                  aria-expanded="false"
                  aria-label="See more messaging options"
                  data-control-name="dropdown_menu"
                  id="ember1353"
                  class="artdeco-dropdown__trigger artdeco-button artdeco-button--2 artdeco-button--circle artdeco-button--tertiary artdeco-dropdown__trigger--placement-bottom ember-view"
                  type="button"
                  tabindex="0"
                >
                  <li-icon
                    aria-hidden="true"
                    type="ellipsis-horizontal-icon"
                    class="artdeco-button__icon"
                    size="medium"
                    color="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      data-supported-dps="24x24"
                      fill="currentColor"
                      width="24"
                      height="24"
                      focusable="false"
                    >
                      <path d="M2 10h4v4H2v-4zm8 4h4v-4h-4v4zm8-4v4h4v-4h-4z" />
                    </svg>
                  </li-icon>
                </button>
                <div class="msg-conversations-container__dropdown-container">
                  <div
                    tabindex="-1"
                    aria-hidden="true"
                    id="ember1354"
                    class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--has-arrow artdeco-dropdown__content--arrow-right artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
                  ></div>
                </div>
              </div>
            </div>
            <div id="ember1355" class="ember-view">
              <heading
                id="ember1356"
                class="msg-search-form global-title-container shared-title-bar msg-search-form ember-view"
              >
                <div class="shared-title-bar__title msg-search-form__title-bar-title">
                  <label for="search-conversations" class="visually-hidden">Search messages</label>
                  <input
                    name="searchTerm"
                    autocomplete="off"
                    placeholder="Search messages"
                    id="search-conversations"
                    class="msg-search-form__search-field t-14 t-black t-normal ember-text-field ember-view"
                    type="search"
                  />
                  <li-icon
                    aria-hidden="true"
                    type="search-icon"
                    class="msg-search-form__search-icon"
                    size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path
                        d="M14 12.67L11.13 9.8a5 5 0 10-1.33 1.33L12.67 14zM3.88 7A3.13 3.13 0 117 10.13 3.13 3.13 0 013.88 7z"
                      />
                    </svg>
                  </li-icon>
                  <div
                    id="ember1358"
                    class="artdeco-dropdown msg-search-form__choose-filters artdeco-dropdown--placement-bottom artdeco-dropdown--justification-right ember-view"
                  >
                    <button
                      aria-expanded="false"
                      data-control-name="filter_messages_by"
                      id="ember1359"
                      class="artdeco-dropdown__trigger artdeco-dropdown__trigger--placement-bottom ember-view artdeco-button artdeco-button--tertiary artdeco-button--1 artdeco-button--circle artdeco-button--muted"
                      type="button"
                      tabindex="0"
                    >
                      <li-icon
                        type="filter-icon"
                        class="artdeco-button__icon"
                        size="small"
                        role="img"
                        aria-label="Filter messages"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path
                            d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z"
                          />
                        </svg>
                      </li-icon>
                    </button>
                    <div
                      tabindex="-1"
                      aria-hidden="true"
                      id="ember1360"
                      class="artdeco-dropdown__content artdeco-dropdown--is-dropdown-element artdeco-dropdown__content--justification-right artdeco-dropdown__content--placement-bottom ember-view"
                    ></div>
                  </div>
                </div>
              </heading>
            </div>
            <a href="#" id="ember1361" class="jump-link visually-hidden focusable ember-view">
              <div class="pv1 ph2 t-14 t-black t-normal">Jump to active conversation details</div>
            </a>
          </div>
          <h2 class="visually-hidden">Conversation List</h2>
          <span
            class="visually-hidden"
          >Attention screen reader users, messaging items continuously update. Please use the tab and shift + tab keys instead of your up and down arrow keys to navigate between messaging items.</span>
          <ul
            id="ember1362"
            class="msg-conversations-container__conversations-list list-style-none ember-view"
          >
            <li
              id="ember1364"
              class="msg-conversation-listitem msg-conversations-container__convo-item msg-conversations-container__pillar ember-view"
            >
              <div
                id="ember1365"
                class="msg-conversation-card msg-conversations-container__pillar ember-view"
              >
                <a
                  data-control-name="view_message"
                  href="/messaging/thread/6677240433455849472/"
                  id="ember1366"
                  class="ember-view msg-conversation-listitem__link msg-conversations-container__convo-item-link pl3"
                  role="button"
                >
                  <div
                    id="ember1367"
                    class="msg-facepile-grid msg-facepile-grid--no-facepile msg-facepile-grid--large ember-view"
                  >
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      loading="lazy"
                      alt="Michael Quek"
                      id="ember1369"
                      class="lazy-image msg-facepile-grid__img msg-facepile-grid__img--person ghost-person ember-view"
                    />
                  </div>
                  <div class="msg-conversation-card__content">
                    <div class="msg-conversation-card__row pr2">
                      <h3
                        class="msg-conversation-listitem__participant-names msg-conversation-card__participant-names truncate pr1 t-16 t-black t-normal"
                      >Michael Quek</h3>
                      <time
                        class="msg-conversation-listitem__time-stamp t-14 t-black t-normal msg-conversation-card__time-stamp"
                      >Jun 12</time>
                    </div>
                    <div class="msg-conversation-card__row pr2">
                      <p
                        class="msg-conversation-listitem__message-snippet msg-conversation-card__message-snippet m0 t-14 t-black t-normal"
                      >
                        <span id="ember1370" class="ember-view">
                          <span
                            class="msg-conversation-card__pill t-14 t-black t-bold pr1"
                          >Sponsored •</span>
                          Special Invite: Simplify, Secure DevOps
                        </span>
                      </p>
                      <div class="msg-conversation-card__conversation-status t-black"></div>
                    </div>
                  </div>
                  <span
                    class="msg-conversation-listitem__active-text visually-hidden"
                  >. Active conversation</span>
                  <span class="visually-hidden">. Press return to go to conversation details</span>
                </a>
                <div class="white-space-nowrap">
                  <button
                    aria-label
                    id="ember1371"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-read-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="mark_unread"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="envelope-open-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14.5 3.56L8.5.13A1 1 0 008 0a1 1 0 00-.5.13l-6 3.43a1 1 0 00-.5.87V12a1 1 0 001 1h12a1 1 0 001-1V4.43a1 1 0 00-.5-.87zM8 2.15L13 5v.1L8.31 8a.57.57 0 01-.64 0L3 5.11V5zM3 11V6.14l4.2 2.6A1.44 1.44 0 008 9a1.41 1.41 0 00.78-.24L13 6.14V11H3z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Mark your conversation with as unread</span>
                  </button>
                  <button
                    id="ember1372"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-archive-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="archive_conversation"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="archive-message-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M15 3v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h3v2H3v1h2v1H3v6h10V6h-2V5h2V4h-2V2h3a1 1 0 011 1zM7 1v6H5l2.24 2.65a1 1 0 001.52 0L11 7H9V1H7z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Archive conversation</span>
                  </button>
                </div>
              </div>
            </li>
            <li
              id="ember1373"
              class="msg-conversation-listitem msg-conversations-container__convo-item msg-conversations-container__pillar ember-view"
            >
              <div
                id="ember1453"
                class="msg-conversation-card msg-conversations-container__pillar ember-view"
              >
                <a
                  data-control-name="view_message"
                  href="/messaging/thread/6659865881054720000/"
                  id="ember1454"
                  class="ember-view msg-conversation-listitem__link msg-conversations-container__convo-item-link pl3"
                  role="button"
                >
                  <div
                    id="ember1455"
                    class="msg-facepile-grid msg-facepile-grid--no-facepile msg-facepile-grid--large ember-view"
                  >
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C560CAQEUZji8boiIvw/spinmail-customsender-displayphoto-shrink_100_100/0?e=1592128800&amp;v=beta&amp;t=psPQYL0rHb15ujMUJVLPhk7MYeg-EReo9tsBnOcuCfA"
                      loading="lazy"
                      alt="Liza from Gency healty Premium"
                      id="ember1456"
                      class="lazy-image msg-facepile-grid__img msg-facepile-grid__img--person ember-view"
                    />
                  </div>
                  <div class="msg-conversation-card__content">
                    <div class="msg-conversation-card__row pr2">
                      <h3
                        class="msg-conversation-listitem__participant-names msg-conversation-card__participant-names truncate pr1 t-16 t-black t-normal"
                      >Liza from Gency healty Premium</h3>
                      <time
                        class="msg-conversation-listitem__time-stamp t-14 t-black t-normal msg-conversation-card__time-stamp"
                      >Apr 26</time>
                    </div>
                    <div class="msg-conversation-card__row pr2">
                      <p
                        class="msg-conversation-listitem__message-snippet msg-conversation-card__message-snippet m0 t-14 t-black t-normal"
                      >
                        <span id="ember1457" class="ember-view">
                          <span
                            class="msg-conversation-card__pill t-14 t-black t-bold pr1"
                          >Gency healty Offer •</span>
                          Thanks for being a valued member
                        </span>
                      </p>
                      <div class="msg-conversation-card__conversation-status t-black"></div>
                    </div>
                  </div>
                  <span
                    class="msg-conversation-listitem__active-text visually-hidden"
                  >. Active conversation</span>
                  <span class="visually-hidden">. Press return to go to conversation details</span>
                </a>
                <div class="white-space-nowrap">
                  <button
                    aria-label
                    id="ember1458"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-read-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="mark_unread"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="envelope-open-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14.5 3.56L8.5.13A1 1 0 008 0a1 1 0 00-.5.13l-6 3.43a1 1 0 00-.5.87V12a1 1 0 001 1h12a1 1 0 001-1V4.43a1 1 0 00-.5-.87zM8 2.15L13 5v.1L8.31 8a.57.57 0 01-.64 0L3 5.11V5zM3 11V6.14l4.2 2.6A1.44 1.44 0 008 9a1.41 1.41 0 00.78-.24L13 6.14V11H3z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Mark your conversation with as unread</span>
                  </button>
                  <button
                    id="ember1459"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-archive-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="archive_conversation"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="archive-message-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M15 3v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h3v2H3v1h2v1H3v6h10V6h-2V5h2V4h-2V2h3a1 1 0 011 1zM7 1v6H5l2.24 2.65a1 1 0 001.52 0L11 7H9V1H7z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Archive conversation</span>
                  </button>
                </div>
              </div>
            </li>
            <li
              id="ember1374"
              class="msg-conversation-listitem msg-conversations-container__convo-item msg-conversations-container__pillar ember-view"
            >
              <div
                id="ember1445"
                class="msg-conversation-card msg-conversations-container__pillar ember-view"
              >
                <a
                  data-control-name="view_message"
                  href="/messaging/thread/6656192158313299968/"
                  id="ember1446"
                  class="ember-view msg-conversation-listitem__link msg-conversations-container__convo-item-link pl3"
                  role="button"
                >
                  <div
                    id="ember1447"
                    class="presence-entity msg-conversation-card__presence-entity presence-entity--size-4 ember-view"
                  >
                    <img
                      title="Dat Huynh"
                      src="https://media-exp1.licdn.com/dms/image/C4E03AQE-NrjGEcoVIg/profile-displayphoto-shrink_100_100/0?e=1597276800&amp;v=beta&amp;t=92wQS-nk4pzEa2vFrBTYq04sFrwCgWWoZUFlx-OyJOg"
                      loading="lazy"
                      alt="Dat Huynh"
                      id="ember1448"
                      class="presence-entity__image EntityPhoto-circle-4 lazy-image ember-view"
                    />
                    <div
                      id="ember1449"
                      class="msg-conversation-card__presence-entity-indicator presence-entity__indicator presence-entity__indicator--size-4 presence-indicator presence-indicator--is-reachable presence-indicator--size-4 ember-view"
                    >
                      <span class="visually-hidden">Status is reachable</span>
                    </div>
                  </div>
                  <div class="msg-conversation-card__content">
                    <div class="msg-conversation-card__row pr2">
                      <h3
                        class="msg-conversation-listitem__participant-names msg-conversation-card__participant-names truncate pr1 t-16 t-black t-normal"
                      >Dat Huynh</h3>
                      <time
                        class="msg-conversation-listitem__time-stamp t-14 t-black t-normal msg-conversation-card__time-stamp"
                      >Apr 15</time>
                    </div>
                    <div class="msg-conversation-card__row pr2">
                      <p
                        class="msg-conversation-listitem__message-snippet msg-conversation-card__message-snippet m0 t-14 t-black t-normal"
                      >
                        <span id="ember1450" class="ember-view">
                          <span
                            class="msg-conversation-card__message-snippet-body"
                          >Dat: Hi Cuong, great to connect with you</span>
                        </span>
                      </p>
                      <div class="msg-conversation-card__conversation-status t-black"></div>
                    </div>
                  </div>
                  <span
                    class="msg-conversation-listitem__active-text visually-hidden"
                  >. Active conversation</span>
                  <span class="visually-hidden">. Press return to go to conversation details</span>
                </a>
                <div class="white-space-nowrap">
                  <button
                    aria-label
                    id="ember1451"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-read-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="mark_unread"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="envelope-open-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14.5 3.56L8.5.13A1 1 0 008 0a1 1 0 00-.5.13l-6 3.43a1 1 0 00-.5.87V12a1 1 0 001 1h12a1 1 0 001-1V4.43a1 1 0 00-.5-.87zM8 2.15L13 5v.1L8.31 8a.57.57 0 01-.64 0L3 5.11V5zM3 11V6.14l4.2 2.6A1.44 1.44 0 008 9a1.41 1.41 0 00.78-.24L13 6.14V11H3z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Mark your conversation with Dat as unread</span>
                  </button>
                  <button
                    id="ember1452"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-archive-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="archive_conversation"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="archive-message-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M15 3v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h3v2H3v1h2v1H3v6h10V6h-2V5h2V4h-2V2h3a1 1 0 011 1zM7 1v6H5l2.24 2.65a1 1 0 001.52 0L11 7H9V1H7z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Archive conversation</span>
                  </button>
                </div>
              </div>
            </li>
            <li
              id="ember1375"
              class="msg-conversation-listitem msg-conversations-container__convo-item msg-conversations-container__pillar ember-view"
            >
              <div
                id="ember1437"
                class="msg-conversation-card msg-conversations-container__pillar ember-view"
              >
                <a
                  data-control-name="view_message"
                  href="/messaging/thread/6656133417048125441/"
                  id="ember1438"
                  class="ember-view msg-conversation-listitem__link msg-conversations-container__convo-item-link pl3"
                  role="button"
                >
                  <div
                    id="ember1439"
                    class="presence-entity msg-conversation-card__presence-entity presence-entity--size-4 ember-view"
                  >
                    <img
                      title="Bang (Brian) Nguyen"
                      src="https://media-exp1.licdn.com/dms/image/C5103AQEor8G2mPLuew/profile-displayphoto-shrink_100_100/0?e=1597276800&amp;v=beta&amp;t=g71b5cQLTH6goz1Sd1xFiOKk8lTBy5_TDe6lv7OGX3Y"
                      loading="lazy"
                      alt="Bang (Brian) Nguyen"
                      id="ember1440"
                      class="presence-entity__image EntityPhoto-circle-4 lazy-image ember-view"
                    />
                    <div
                      id="ember1441"
                      class="msg-conversation-card__presence-entity-indicator presence-entity__indicator presence-entity__indicator--size-4 presence-indicator hidden presence-indicator--size-4 ember-view"
                    >
                      <span class="visually-hidden">Status is offline</span>
                    </div>
                  </div>
                  <div class="msg-conversation-card__content">
                    <div class="msg-conversation-card__row pr2">
                      <h3
                        class="msg-conversation-listitem__participant-names msg-conversation-card__participant-names truncate pr1 t-16 t-black t-normal"
                      >Bang (Brian) Nguyen</h3>
                      <time
                        class="msg-conversation-listitem__time-stamp t-14 t-black t-normal msg-conversation-card__time-stamp"
                      >Apr 15</time>
                    </div>
                    <div class="msg-conversation-card__row pr2">
                      <p
                        class="msg-conversation-listitem__message-snippet msg-conversation-card__message-snippet m0 t-14 t-black t-normal"
                      >
                        <span id="ember1442" class="ember-view">
                          <span class="msg-conversation-card__message-snippet-body">
                            Bang (Brian): Dear Mr. Cường,
                            Rất vui được kết nối với em,
                            Anh Bằng từ team tuyển dụng công ty Lozi Vietnam, cty product về eCommerce/Logistics, vp quận 11. Bên anh đang tìm ứng viên Backend Developer (Golang), em quan tâm trao đổi với anh nhé.
                            Cảm ơn em,
                            Bằng
                          </span>
                        </span>
                      </p>
                      <div class="msg-conversation-card__conversation-status t-black"></div>
                    </div>
                  </div>
                  <span
                    class="msg-conversation-listitem__active-text visually-hidden"
                  >. Active conversation</span>
                  <span class="visually-hidden">. Press return to go to conversation details</span>
                </a>
                <div class="white-space-nowrap">
                  <button
                    aria-label
                    id="ember1443"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-read-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="mark_unread"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="envelope-open-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14.5 3.56L8.5.13A1 1 0 008 0a1 1 0 00-.5.13l-6 3.43a1 1 0 00-.5.87V12a1 1 0 001 1h12a1 1 0 001-1V4.43a1 1 0 00-.5-.87zM8 2.15L13 5v.1L8.31 8a.57.57 0 01-.64 0L3 5.11V5zM3 11V6.14l4.2 2.6A1.44 1.44 0 008 9a1.41 1.41 0 00.78-.24L13 6.14V11H3z"
                        />
                      </svg>
                    </li-icon>
                    <span
                      class="artdeco-button__text"
                    >Mark your conversation with Bang (Brian) as unread</span>
                  </button>
                  <button
                    id="ember1444"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-archive-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="archive_conversation"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="archive-message-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M15 3v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h3v2H3v1h2v1H3v6h10V6h-2V5h2V4h-2V2h3a1 1 0 011 1zM7 1v6H5l2.24 2.65a1 1 0 001.52 0L11 7H9V1H7z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Archive conversation</span>
                  </button>
                </div>
              </div>
            </li>
            <li
              id="ember1376"
              class="msg-conversation-listitem msg-conversations-container__convo-item msg-conversations-container__pillar ember-view"
            >
              <div
                id="ember1504"
                class="msg-conversation-card msg-conversations-container__pillar ember-view"
              >
                <a
                  data-control-name="view_message"
                  href="/messaging/thread/6648073972279754752/"
                  id="ember1505"
                  class="ember-view msg-conversation-listitem__link msg-conversations-container__convo-item-link pl3"
                  role="button"
                >
                  <div
                    id="ember1506"
                    class="msg-facepile-grid msg-facepile-grid--no-facepile msg-facepile-grid--large ember-view"
                  >
                    <img
                      src="https://media-exp1.licdn.com/dms/image/C510CAQH8WE-igT-zpw/spinmail-customsender-displayphoto-shrink_100_100/0?e=1592128800&amp;v=beta&amp;t=WMvWc1Ydgs0EpBawNWIAAISeFFN5BmaNOHsx-qvfE34"
                      loading="lazy"
                      alt="Mandy Lin"
                      id="ember1507"
                      class="lazy-image msg-facepile-grid__img msg-facepile-grid__img--person ember-view"
                    />
                  </div>
                  <div class="msg-conversation-card__content">
                    <div class="msg-conversation-card__row pr2">
                      <h3
                        class="msg-conversation-listitem__participant-names msg-conversation-card__participant-names truncate pr1 t-16 t-black t-normal"
                      >Mandy Lin</h3>
                      <time
                        class="msg-conversation-listitem__time-stamp t-14 t-black t-normal msg-conversation-card__time-stamp"
                      >Mar 24</time>
                    </div>
                    <div class="msg-conversation-card__row pr2">
                      <p
                        class="msg-conversation-listitem__message-snippet msg-conversation-card__message-snippet m0 t-14 t-black t-normal"
                      >
                        <span id="ember1508" class="ember-view">
                          <span
                            class="msg-conversation-card__pill t-14 t-black t-bold pr1"
                          >Sponsored •</span>
                          Catch us at our 8 April webinar
                        </span>
                      </p>
                      <div class="msg-conversation-card__conversation-status t-black"></div>
                    </div>
                  </div>
                  <span
                    class="msg-conversation-listitem__active-text visually-hidden"
                  >. Active conversation</span>
                  <span class="visually-hidden">. Press return to go to conversation details</span>
                </a>
                <div class="white-space-nowrap">
                  <button
                    aria-label
                    id="ember1509"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-read-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="mark_unread"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="envelope-open-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M14.5 3.56L8.5.13A1 1 0 008 0a1 1 0 00-.5.13l-6 3.43a1 1 0 00-.5.87V12a1 1 0 001 1h12a1 1 0 001-1V4.43a1 1 0 00-.5-.87zM8 2.15L13 5v.1L8.31 8a.57.57 0 01-.64 0L3 5.11V5zM3 11V6.14l4.2 2.6A1.44 1.44 0 008 9a1.41 1.41 0 00.78-.24L13 6.14V11H3z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Mark your conversation with as unread</span>
                  </button>
                  <button
                    id="ember1510"
                    class="msg-conversation-card__list-action msg-conversation-card__toggle-archive-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                    data-control-name="archive_conversation"
                  >
                    <li-icon
                      aria-hidden="true"
                      type="archive-message-icon"
                      class="artdeco-button__icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path
                          d="M15 3v10a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h3v2H3v1h2v1H3v6h10V6h-2V5h2V4h-2V2h3a1 1 0 011 1zM7 1v6H5l2.24 2.65a1 1 0 001.52 0L11 7H9V1H7z"
                        />
                      </svg>
                    </li-icon>
                    <span class="artdeco-button__text">Archive conversation</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="msg-thread msg-compose-container relative display-flex">
          <div
            id="ember1849"
            class="global-title-container shared-title-bar msg-title-bar ember-view"
          >
            <div class="shared-title-bar__title msg-title-bar__title-bar-title">
              <h1
                class="shared-title-bar__text msg-title-bar__title-bar-text t-16 t-black t-normal"
              >New message</h1>
            </div>
          </div>

          <div id="ember1850" class="msg-connections-typeahead relative ember-view">
            <label for="ember1850-search-field" class="visually-hidden">Enter message recipients</label>
            <section class="msg-connections-typeahead__top-fixed-section">
              <div
                class="msg-connections-typeahead__added-recipients display-flex align-items-center pl2 pv1"
              >
                <input
                  id="ember1850-search-field"
                  class="msg-connections-typeahead__search-field msg-connections-typeahead__search-field--no-recipients ml1 mv1"
                  placeholder="Type a name or multiple names…"
                  role="combobox"
                  aria-autocomplete="list"
                  aria-owns="ember1850-suggestions-menu"
                  autocomplete="off"
                  aria-expanded="false"
                  type="text"
                />

                <div class="msg-connections-typeahead__hidden-field" />
              </div>
            </section>
          </div>

          <div class="msg-compose-container__spacer mtA" />
          <div class="msg-compose-container__form-wrapper">
            <form id="ember1851" class="msg-form msg-form--thread ember-view">
              <div id="ember1863" class="msg-form__attachment-drag-and-drop p1 ember-view">
                <div
                  class="msg-form__attachment-drag-and-drop-content display-flex flex-column align-items-center justify-center"
                >
                  <div class="msg-form__attachment-drag-and-drop-state-illustration" />
                  <div
                    class="msg-form__attachment-drag-and-drop-text display-flex flex-column align-items-center justify-center"
                  >
                    <div
                      class="msg-form__attachment-drag-and-drop-state-text t-16 t-bold"
                    >Drag your file here.</div>
                    <div
                      class="msg-form__attachment-drag-and-drop-discoverability-text text-align-center"
                    >
                      <div class="t-16 t-bold">Select your file</div>
                      <div class="t-14">Or drag &amp; drop next time</div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ember1864" class="msg-form__attachment-previews ember-view"></div>

              <div id="ember1853" class="msg-form__msg-content-container ember-view">
                <div class="msg-form__msg-content-container--scrollable">
                  <div
                    id="ember1854"
                    class="msg-form__message-texteditor relative flex-grow-1 display-flex ember-view"
                  >
                    <div
                      class="msg-form__contenteditable t-14 t-black--light t-normal flex-grow-1 notranslate"
                      contenteditable="true"
                      role="textbox"
                      aria-multiline="true"
                      aria-label="Write a message…"
                    >
                      <p>
                        <br />
                      </p>
                    </div>
                    <div
                      id="msg-form__contenteditable-placeholder-ember1854"
                      class="msg-form__placeholder t-14 t-black--light t-normal visible"
                      data-placeholder="Write a message…"
                    />
                  </div>
                  <div class="msg-form__expand-btn-wrapper">
                    <button
                      aria-label="Maximize compose field"
                      id="ember1855"
                      class="msg-form__expand-btn artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                      data-control-name="open_expand"
                      type="button"
                    >
                      <li-icon
                        aria-hidden="true"
                        type="chevron-up-icon"
                        class="artdeco-button__icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path
                            d="M12 10l-8.94 6L2 14.45l9.15-6.19a1.5 1.5 0 011.69 0L22 14.45 20.94 16z"
                          />
                        </svg>
                      </li-icon>
                      <span class="artdeco-button__text" />
                    </button>
                  </div>
                </div>
              </div>

              <footer class="msg-form__footer">
                <div class="msg-form__left-actions display-flex">
                  <div id="ember1856" class="msg-form__upload-attachment inline-block ember-view">
                    <input name="persist" value="true" type="hidden" />
                    <input name="upload_info" type="hidden" value />
                    <input
                      id="attachment-input-ember1856"
                      class="msg-form__attachment-upload-input hidden"
                      accept="image/*"
                      data-control-name="image_select"
                      type="file"
                    />
                    <button
                      id="attachment-trigger-ember1856"
                      class="msg-form__footer-action artdeco-button artdeco-button--tertiary artdeco-button--circle artdeco-button--muted m0"
                      title="Attach an image"
                      aria-label="Attach an image"
                      type="button"
                    >
                      <span class="visually-hidden">Attach an image</span>
                      <li-icon aria-hidden="true" type="image-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path
                            d="M21 4H3a1 1 0 00-1 1v14a1 1 0 001 1h18a1 1 0 001-1V5a1 1 0 00-1-1zm-1 2v10.65l-3.7-3.53a.44.44 0 00-.6 0L13.79 15 7.87 9.13a.44.44 0 00-.62 0L4 12.4V6h16zM4 18v-4.36l3.57-3.59 5.91 5.82a.44.44 0 00.61 0L16 14l4 3.82V18H4zm12-6a2 2 0 10-2-2 2 2 0 002 2zm0-3.25A1.25 1.25 0 1114.75 10 1.25 1.25 0 0116 8.75z"
                          />
                        </svg>
                      </li-icon>
                    </button>
                  </div>
                  <div id="ember1857" class="msg-form__upload-attachment inline-block ember-view">
                    <input name="persist" value="true" type="hidden" />
                    <input name="upload_info" type="hidden" value />
                    <input
                      id="attachment-input-ember1857"
                      class="msg-form__attachment-upload-input hidden"
                      accept="image/*, .ai, .psd, .pdf, .doc, .docx, .csv, .zip, .rar, .ppt, .pptx, .pps, .ppsx, .odt, .rtf, .xls, .xlsx, .txt, .pub, .html, .7z, .eml"
                      data-control-name="file_select"
                      type="file"
                    />
                    <button
                      id="attachment-trigger-ember1857"
                      class="msg-form__footer-action artdeco-button artdeco-button--tertiary artdeco-button--circle artdeco-button--muted m0"
                      title="Attach a file"
                      aria-label="Attach a file"
                      type="button"
                    >
                      <span class="visually-hidden">Attach a file</span>
                      <li-icon aria-hidden="true" type="paperclip-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path
                            d="M8 6h9.5c3 0 5.5 2.5 5.5 5.5S20.5 17 17.5 17H5c-2.2 0-4-1.8-4-4s1.8-4 4-4h9.5c1.4 0 2.5 1.1 2.5 2.5S15.9 14 14.5 14H8v-2h6.5c.3 0 .6-.1.6-.4v-.1c0-.3-.3-.5-.5-.5H5c-1-.1-2 .6-2.1 1.6v.4c-.1 1 .7 1.9 1.7 2h13c1.9 0 3.5-1.5 3.5-3.3v-.2c0-1.9-1.4-3.4-3.3-3.5H8V6z"
                          />
                        </svg>
                      </li-icon>
                    </button>
                  </div>
                  <div id="ember1865" class="tenor-gif__button relative ember-view">
                    <button
                      title="Open GIF Keyboard"
                      aria-label="Open GIF Keyboard"
                      id="ember1866"
                      class="msg-form__footer-action artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                      data-control-name="select_gif"
                      type="button"
                    >
                      <li-icon aria-hidden="true" type="gif-icon" class="artdeco-button__icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path
                            d="M13 18h-2V6h2v12zm9-10V6h-6a1 1 0 00-1 1v11h2v-5h4v-2h-4V8h5zM2 7v10a1 1 0 001 1h5a1 1 0 001-1v-5H5v2h2v2H4V8h3v2h2V7a1 1 0 00-1-1H3a1 1 0 00-1 1z"
                          />
                        </svg>
                      </li-icon>
                      <span class="artdeco-button__text">Open GIF Keyboard</span>
                    </button>
                  </div>

                  <div id="ember1867" class="emoji-trigger relative ember-view">
                    <button
                      title="Open Emoji Keyboard"
                      aria-label="Open Emoji Keyboard"
                      id="ember1868"
                      class="msg-form__footer-action artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--2 artdeco-button--tertiary ember-view"
                      data-control-name="msg.open_emoji_picker"
                      type="button"
                    >
                      <li-icon
                        aria-hidden="true"
                        type="emoji-face-icon"
                        class="artdeco-button__icon"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          data-supported-dps="24x24"
                          fill="currentColor"
                          width="24"
                          height="24"
                          focusable="false"
                        >
                          <path
                            d="M15.58 14.19l.8 1.37A7.71 7.71 0 0112 16.88a7.75 7.75 0 01-4.38-1.32l.8-1.37a7.36 7.36 0 007.16 0zM9 11.5A1.5 1.5 0 107.5 10 1.5 1.5 0 009 11.5zm6-3a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0015 8.5zm-3-4.62A8.12 8.12 0 113.88 12 8.13 8.13 0 0112 3.88M12 2a10 10 0 1010 10A10 10 0 0012 2z"
                          />
                        </svg>
                      </li-icon>
                      <span class="artdeco-button__text">Open Emoji Keyboard</span>
                    </button>
                  </div>
                </div>
                <div class="msg-form__right-actions display-flex align-items-center">
                  <div>
                    <button
                      class="msg-form__send-button artdeco-button artdeco-button--1"
                      disabled
                      type="submit"
                    >Send</button>
                  </div>
                  <div id="ember1860" class="msg-form__hovercard-container ml2 relative ember-view">
                    <button
                      aria-expanded="false"
                      id="ember1861"
                      class="msg-form__send-toggle artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"
                      type="button"
                    >
                      <li-icon
                        aria-hidden="true"
                        type="ellipsis-horizontal-icon"
                        class="artdeco-button__icon"
                        size="small"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          data-supported-dps="16x16"
                          fill="currentColor"
                          width="16"
                          height="16"
                          focusable="false"
                        >
                          <path d="M2 7h2v2H2V7zm5 2h2V7H7v2zm5-2v2h2V7h-2z" />
                        </svg>
                      </li-icon>
                      <span class="artdeco-button__text">Open send options</span>
                    </button>
                    <div
                      class="msg-form__hovercard t-14 t-black--light t-normal hovercard"
                      tabindex="-1"
                    >
                      <fieldset>
                        <legend class="a11y-text">Choose a send option</legend>
                        <input
                          id="enter-to-send-ember1860"
                          name="send-settings-ember1860"
                          type="radio"
                          value="enterSend"
                        />
                        <label for="enter-to-send-ember1860" class="mt0">
                          <p class="t-16 t-black--light t-bold">Press Enter to Send</p>
                          <p class="t-14 t-black--light t-normal">Pressing Enter will send message</p>
                        </label>
                        <input
                          id="send-ember1860"
                          name="send-settings-ember1860"
                          type="radio"
                          value="send"
                        />
                        <label for="send-ember1860">
                          <p class="t-16 t-black--light t-bold">Click Send</p>
                          <p class="t-14 t-black--light t-normal">Clicking Send will send message</p>
                        </label>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </footer>
            </form>
          </div>
        </div>
        <div id="ember1870" class="ember-view">
          <div id="ember1871" class="ember-view"></div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
// query constructor
import { isServer, onlineHelper } from "@vue-storefront/core/helpers";
// Theme core components
import ApplicationList from "theme/components/core/blocks/Applications/ApplicationList";
import Notification from "theme/components/core/blocks/Notification/Notification";
// Theme local components
import { Logger } from "@vue-storefront/core/lib/logger";
// import "./Message.css";

export default {
  data() {
    return {
      loading: true
    };
  },

  components: {},
  computed: {},
  beforeCreate() {},
  async beforeMount() {},
  mounted() {},
  watch: {},
  async asyncData({ store, route }) {
    // this is for SSR purposes to prefetch data
  },
  beforeRouteEnter(to, from, next) {
    next();
  }
};
</script>
