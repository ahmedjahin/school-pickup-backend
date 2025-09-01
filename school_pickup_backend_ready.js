.gitattributes جاهز لمشروع NestJS:

```
# تحويل نهاية الأسطر تلقائياً
* text=auto
*.ts eol=lf
*.js eol=lf
*.json eol=lf
*.env eol=lf
```

احفظ الملف باسم `.gitattributes` في جذر المشروع (نفس مستوى package.json). بعد كده Git هيقوم بتحويل نهاية الأسطر تلقائياً لـ LF عند كل commit، وبالتالي التحذيرات اللي كانت طالعة هتختفي.
