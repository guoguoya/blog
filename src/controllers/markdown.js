import express from 'express';
import { markdown } from 'markdown';
import fs from 'fs';
import path from 'path';
import basePath from '../../basePath';
import showdown from 'showdown';
import { wrapHtml }  from './untils/decorator-html';

let router = express.Router();
console.log(wrapHtml, typeof wrapHtml);
router.get('/article/first', function(req, res){

    fs.readFile(path.join(basePath.rootPath, './static/article/first.md'), function(err, data){
      if (err) {
        throw err ; 
      }
      const text = data.toString();
      const converter = new showdown.Converter();
      let html      = converter.makeHtml(text);
      res.send(wrapHtml(html, 'markdown-body'));
    });
});

export default router; 
