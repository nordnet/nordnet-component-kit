## Translations

ID | Default
------------ | -------------
COMPONENT_KIT.FEED_STATUS.DELAY | Delayed
COMPONENT_KIT.FEED_STATUS.NO_DELAY | Realtime
COMPONENT_KIT.FEED_STATUS.HOUR  | h
COMPONENT_KIT.FEED_STATUS.MINUTE | m
COMPONENT_KIT.FEED_STATUS.SECOND | s
COMPONENT_KIT.FEED_STATUS.CLOSE_PRICE | Close price
COMPONENT_KIT.FEED_STATUS.UPDATED | Updated

No delay feed:

    <FeedStatus delay={0} timestamp={1} />

Delay feed:

    <FeedStatus delay={60*60 + 60*2 + 3} timestamp={2} />

No feed:

    <FeedStatus delay={1} timestamp={3} closePrice />
