const onclickAdd = () => {
    // テキストボックスの値を取得
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    console.log(inputText);
  
    // 要素の作成
    const li = document.createElement("li");
    const div = document.createElement("div");
    const p = document.createElement("p");
  
    // 完了ボタン
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "完了";
    completeButton.addEventListener("click", () => {
      const moveTarget = completeButton.closest("li");
      document.getElementById("complete-list").appendChild(moveTarget);
      document.getElementById("incomplete-list").removeChild(moveTarget);
    });
  
    // 削除ボタン
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "削除";
    deleteButton.addEventListener("click", () => {
      // 押された削除ボタンの親タグを未完了リストから削除
      //const deleteTarget = deleteButton.parentNode;
  
      // 親要素をたどり()内で指定した一番近い要素を求める
      const deleteTarget = deleteButton.closest("li");
      document.getElementById("incomplete-list").removeChild(deleteTarget);
    });
  
    // クラス名をセット
    div.className = "list-row";
  
    // pタグ内に表示する値をセット。
    p.innerHTML = inputText;
  
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
  
    // // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
  };
  
  document
    .getElementById("add-button")
    .addEventListener("click", () => onclickAdd());
  