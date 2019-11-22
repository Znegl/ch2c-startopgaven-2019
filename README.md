# CH2C Startopgaven 2019

## Requirements
- NPM
- Node.js
- Automatic deployment to [Now](https://now.sh) (optional) 

## Project overview
The project consts of a small handful of files and a folder:
- `build.js`
- `data.js`
- `template.html`
- `static`

The file `build.js` contains a script that loops through the data provided by `data.js`, applies the template
defined in `template.html` and stores the result as separate files in a new directory called `public`.  
To top it all of, the files from `static` are all copied to the `public` folder as well.


## Getting up and running
1. Install dependencies by running `npm ci`
2. Build the project by running `npm run build`
3. Host it somewhere nice (I prefer Now.sh, read more under Deployment)

## Configuring data
1. Edit `data.js` with the data of your choice
2. Done!

## Extra public assets
Any public asssets can be added to the `static` folder. Currently it holds a stylesheet, font, 404 page, favicon, robots.txt, some images for the 404 page and a secret map video link (which is no longer a secret).

## Deployment
If you're using [Now](https://now.sh) with github integration, you just have to push to master.  
The project already contains configuration for routing and error handling in `now.json`.
Remember to update the start redirectto match your own start route (the file name of the first assignment).
```json
{
  "src": "/",
  "status": 302,
  "headers": {
    "Location": "/1"
  }
},
```

If youre not using [Now](https://now.sh), you have to upload the files to your favorite host.
