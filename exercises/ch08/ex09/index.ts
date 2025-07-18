export function withResource(resource: any, func: (resource: any) => void): void {
  // tryブロック内でリソースを使用する処理を実行
  try {
        // コールバック関数 func を呼び出し、リソースを操作
        func(resource);
    }
    // 例外が発生した場合の処理
    catch (e: unknown) {
        // 発生した例外が Error 型の場合、そのメッセージを持つ新しいエラーをスロー
        if (e instanceof Error) {
            throw new Error(e.message);
        } 
        // 発生した例外が Error 型でない場合、汎用的なエラーメッセージをスロー
        else {
            throw new Error("An unknown error occurred");
        }
    }
    // finallyブロックでリソースを必ず解放
    finally {
        // リソースの解放処理を実行
        resource.close();
    }
};
