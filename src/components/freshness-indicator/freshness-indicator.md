## Translations

ID | Default
------------ | -------------
COMPONENT_KIT.FRESHNESS_INDICATOR.DELAY | Delayed
COMPONENT_KIT.FRESHNESS_INDICATOR.NO_DELAY | Realtime
COMPONENT_KIT.FRESHNESS_INDICATOR.HOUR  | h
COMPONENT_KIT.FRESHNESS_INDICATOR.MINUTE | m
COMPONENT_KIT.FRESHNESS_INDICATOR.SECOND | s
COMPONENT_KIT.FRESHNESS_INDICATOR.NOT_ACTIVE | Close price
COMPONENT_KIT.FRESHNESS_INDICATOR.UPDATED | Updated

**NOTE: This compoment has a dependency on nordnet-ui-kit.css, in order to recieve the correct styling of the toolip you will therefore need to include that in your project.**

Realtime data:

    <span>
      - - - - - - - - <FreshnessIndicator delay={0} timestamp={1} />
    </span>

Delayed data:

    <span>
      - - - - - - - - <FreshnessIndicator delay={60*60 + 60*2 + 3} timestamp={2} />
    </span>

No active data update:

    <span>
      - - - - - - - - <FreshnessIndicator delay={1} timestamp={3} notActive />
    </span>
