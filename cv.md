# CV
### Aleksandra Semenova
#### Contacts
---
* **tel:** +7 (922) 955 45 76
* **email:** semenovalekshu@gmail.com
#### About me
---
As I decided to change my career, I'm just beginning my Web Development journey which I find very interesting and fasciating as well as challenging and full of ups and downs.\
I'm eager to expand my professional knowledge and skills and looking forward to becoming a part of the IT world.
#### Hard skills
---
* HTML
* CSS
* JavaScript Basics
* Figma
* Git
* *within courses worked a bit with:*
    * C
    * Phyton
    * Bootstrap
    * JQuery
#### Code examples (JS)
---
**1.** *Categorize New Member*
```
function openOrSenior(data) {
        const result = [];
        let len = data.length;
        for (let i = 0, j = 0; i < len; i++) {
            if (data[i][0] >= 55 && data[i][1] > 7) {
                result[j] = "Senior";
                j++;
            } else {
                result[j] = "Open";
                j++;
            }
        }
        return result;
    }
```
**2.** *Find Shortest Word*
```
function findShort(s) {
    return Math.min.apply(null, s.split(" ").map(word => word.length));
}
```
