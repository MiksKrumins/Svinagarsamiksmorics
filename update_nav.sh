#!/bin/bash

for file in *.html; do
  if [[ "$file" != "navigation.html" ]]; then
    echo "Updating $file..."
    cat > temp.html << EOF
<!DOCTYPE html>
<html lang="lv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nāves ēnā</title>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Special+Elite&family=Libre+Baskerville&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
EOF

    # Extract everything after the opening body tag
    tail -n +11 "$file" > temp_body.txt
    
    # Replace the navigation section
    sed -i '
      /<nav>/,/<\/nav>/ c\
            <nav>\
                <a href="navigation.html" class="navigation-btn">Izvēlne</a>\
            </nav>
    ' temp_body.txt
    
    cat temp_body.txt >> temp.html
    mv temp.html "$file"
    rm temp_body.txt
  fi
done
