## Translations

ID | Default
------------ | -------------
COMPONENT_KIT.FRESHNESS_INDICATOR.DELAY | Delayed
COMPONENT_KIT.FRESHNESS_INDICATOR.NO_DELAY | Realtime
COMPONENT_KIT.FRESHNESS_INDICATOR.HOUR  | h
COMPONENT_KIT.FRESHNESS_INDICATOR.MINUTE | m
COMPONENT_KIT.FRESHNESS_INDICATOR.SECOND | s
COMPONENT_KIT.FRESHNESS_INDICATOR.IS_ACTIVE | Close price
COMPONENT_KIT.FRESHNESS_INDICATOR.UPDATED | Updated

No delay feed:

    <FreshnessIndicator delay={0} timestamp={1} />

Delay feed:

    <FreshnessIndicator delay={60*60 + 60*2 + 3} timestamp={2} />

No feed:

    <FreshnessIndicator delay={1} timestamp={3} isActive />
