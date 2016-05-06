All components in this section is built upon a private `<Number />` component. This has the effect that all props sent to either component below that are not specifically consumed by said component will *trickle down* to the `<Number />` component below.

This means that all components in this section can also take these additional props:

**Props**

| Name            | Type           | Description |
| :-------------- | :------------- | :---------- |
| className       | string         | The class(es) that should apply to the whole component |
| valueClass      | string         | The class(es) that should apply to the value part of the component |
| valueStyle      | object         | The style(s) that should apply to the value part of the component |
| prefix          | node           | Anything that should go before the component. A node is either a string or a DOM node |
| prefixClass     | string         | The class(es) that should apply to the prefix of the component |
| prefixSeparator | string         | A separator between the prefix and the value |
| prefixStyle     | object         | The style(s) that should apply to the prefix part of the component |
| suffix          | node           | Anything that should go after the component. A node is either a string or a DOM node |
| suffixClass     | string         | The class(es) that should apply to the suffix of the component |
| suffixSeparator | string         | A separator between the suffix and the value |
| suffixStyle     | object         | The style(s) that should apply to the suffix part of the component |

**Note:** *A simple wrapper for the `<Number />` component is the `<Value />` component below.*
