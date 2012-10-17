jquery-slidelist
================
slide up or down lists matched the elements.

This is the jquery plugin that slide lists matched the elements.
If you use this plugin, you have to set the style to specified elements.

for example
-----------

```css
#list { width: 400px; height: 300px; border: 1px slid #ddd; }
```
```javascript
$('#list').slidelist();
// or
$('#list').slidelist({
  interval: 4000,
  duration: 2000,
  order: 'asc'
});
```

Options
-------
+ `interval` :  
  the interval millisecond of each slide. The default is 4000(ms).
+ `duration` :  
  the duration millisecond of slide. The default is 'New'.
+ `order` :  
  declare the order that listed slide to be ascendant or descendant.
  If you want to list to be ascendant, set 'asc', otherwise 'desc'.
  The default is 'asc'.

License
-------
You may use this under the terms of either MIT License or
GNU General Public License (GPL) Version 2. (same as jQuery).

### Copyright
Copyright (c) MIYAGINO.net. All Rights Reserved.
