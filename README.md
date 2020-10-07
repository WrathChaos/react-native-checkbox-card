<img alt="React Native Checkbox Card" src="assets/logo.png" width="1050"/>

[![Checkbox Card is customizable and animated built-in check state integration for React Native](https://img.shields.io/badge/-Checkbox%20Card%20is%20customizable%20and%20animated%20built--in%20check%20state%20integration%20for%20React%20Native-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-checkbox-card)

[![npm version](https://img.shields.io/npm/v/react-native-checkbox-card.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-checkbox-card)
[![npm](https://img.shields.io/npm/dt/react-native-checkbox-card.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-checkbox-card)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<table>
  <tr>
    <td>
      <b>Checkbox Card</b>
    </td>
    <td>
      <b>Checkbox Card with Quantity Feature</b>
    </td>
  </tr>
 <tr>
    <td align="center"> 
       <img alt="React Native Checkbox Card"
        src="assets/Screenshots/RN-Checkbox-Card.gif" />
    </td>
    <td align="center">
       <img alt="React Native Checkbox Card"
        src="assets/Screenshots/RN-Checkbox-Card-2.gif" />
    </td>
   </tr>

  <tr>
    <td>
      <b>Checkbox Card Light Mode</b>
    </td>
  </tr>
 <tr>
    <td align="center">
      <img alt="React Native Checkbox Card"
              src="assets/Screenshots/RN-Checkbox-Card-Light.gif" />
    </td>
   </tr>
</table>

# Installation

Add the dependency:

```bash
npm i react-native-checkbox-card
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"@freakycoder/react-native-bounceable": "^0.2.0",
```

# Usage

## Import

```jsx
import RNCheckboxCard from "react-native-checkbox-card";
```

## Fundamental Usage

```jsx
<RNCheckboxCard
  text="Banana"
  onPress={(checked: boolean) => console.log("Checked: ", checked)}
/>
```

## Quantity Prop Usage

```jsx
<RNCheckboxCard
  darkMode
  text="Banana"
  quantity="x2"
  enableQuantityText
  onPress={(checked: boolean) => console.log("Checked: ", checked)}
/>
```

# Configuration - Props

### Fundamental Props

| Property |   Type   |  Default  | Description                                                        |
| -------- | :------: | :-------: | ------------------------------------------------------------------ |
| text     |  string  | undefined | set the main checkbox text                                         |
| onPress  | function |  default  | changes the checkbox's state and returns the changed checked value |

### Featured Props

| Property           |  Type   |  Default  | Description                                                           |
| ------------------ | :-----: | :-------: | --------------------------------------------------------------------- |
| quantity           | string  | undefined | set the checkbox's quantity text                                      |
| enableQuantityText | boolean |   false   | MUST use it for using the quantity prop, it enables the quantity text |
| isChecked          | boolean |   false   | initial checked prop                                                  |
| darkMode           | boolean |   false   | activates the dark mode                                               |

### Customization & Optional Props

| Property              |   Type    |      Default       | Description                                                                             |
| --------------------- | :-------: | :----------------: | --------------------------------------------------------------------------------------- |
| ImageComponent        | component |       Image        | set your own Image component instead of react native's default one such as: `FastImage` |
| rightIconComponent    | component |      default       | set your own component instead of right aligned sort icon image component               |
| checkIconComponent    | component |      default       | set your own component instead of check icon image component                            |
| checkImageSource      |   image   |      default       | set your own image instead of default check icon                                        |
| sortIconImageSource   |   image   |      default       | set your own image instead of default sort icon                                         |
| textStyle             |   style   |      default       | add or override the current text style                                                  |
| quantityTextStyle     |   style   |      default       | add or override the current quantity text style                                         |
| width                 |  number   | ScreenWidth \* 0.9 | change the checkbox card's width                                                        |
| height                |  number   |         60         | change the checkbox card's height                                                       |
| borderRadius          |  number   |         10         | change the checkbox card's border radius                                                |
| backgroundColor       |  string   |      default       | change the checkbox card's background color                                             |
| checkedTextColor      |  string   |      default       | change the checked text color                                                           |
| uncheckedTextColor    |  string   |      default       | change the unchecked text color                                                         |
| circleSize            |  number   |         25         | change the circle's size (width/height)                                                 |
| circleBorderColor     |  string   |      default       | change the circle's border color                                                        |
| circleBorderRadius    |  number   |         25         | change the circle's border radius                                                       |
| circleBackgroundColor |  number   |      default       | change the circle's background color                                                    |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Credits

Heavily inspired by [Eugeniusz Eudokimow](https://dribbble.com/shots/11610076-Shopping-List-App/attachments/3231900?mode=media), thank you so much! :)

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Checkbox Card is available under the MIT license. See the LICENSE file for more info.
