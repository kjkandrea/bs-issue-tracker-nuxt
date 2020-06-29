// http://127.0.0.1:8080/bs-wordpress/wp-json/wp/v2/posts

{
  title: "string",
  date: Sun Jun 28 2020 14:19:25 GMT+0900 (대한민국 표준시),
  content: "lorem ipsum",
  category: "open"
}

// QxFb 7uwn 3DyX vdIP D1Ny 694B

// YW5kcmVhOlF4RmIgN3V3biAzRHlYIHZkSVAgRDFOeSA2OTRC

// curl -k -X POST -d 'log=changwoo' -d 'pwd=01099083348' -d 'rememberme=forever' 'https://bs.shared.com/wp-login.php' -v

echo -n "{PASTE}"
터미널
남창우오후 2:55
echo -n "{PASTE}" | base64 -d
남창우오후 3:19
curl -k -X POST -d 'log=changwoo' -d 'pwd=01099083348' -d 'rememberme=forever' 'https://bs.shared.com/wp-login.php' -v

1. postman에서 이 리퀘스트를 재현하기
남창우오후 3:30
2. taxonomy migration
3. 리포지터리 분리 
남창우오후 3:31
4. 오타 난 거 수정
5. CSS 목업된 것도 반영했으면...
6. 자유롭게!


1. 입력 폼 목업