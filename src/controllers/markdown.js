import express from 'express';
import { markdown } from 'markdown';
import fs from 'fs';
import path from 'path';
import basePath from '../../basePath';
import showdown from 'showdown';

let router = express.Router();

router.get('/article/first', function(req, res){
    console.log('first');
    fs.readFile(path.join(basePath.rootPath, './static/article/first.md'), function(err, data){
      if (err) {
        throw err ; 
      }

      let text = data.toString();
      let converter = new showdown.Converter();
      let html      = converter.makeHtml(text);

      res.send(html);
    });
});

export default router; 
