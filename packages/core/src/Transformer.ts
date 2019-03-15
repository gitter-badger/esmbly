import {
  File,
  Output,
  OutputFormat,
  SyntaxTree,
  TransformerInterface,
} from '@esmbly/types';
import { fileTypeForOutputFormat } from '@esmbly/utils';

export abstract class Transformer implements TransformerInterface {
  public static outputFormats: OutputFormat[] = [];
  public abstract transform(syntaxTrees: SyntaxTree[]): void;
  public createFiles(trees: SyntaxTree[], output: Output[]): File[] {
    const files: File[] = [];
    trees.forEach((tree: SyntaxTree) => {
      output.forEach((output: Output) => {
        if ((this.constructor as any).outputFormats.includes(output.format)) {
          files.push({
            ...tree.represents,
            dir: output.dir || tree.represents.dir,
            content: tree.toCode(),
            type: fileTypeForOutputFormat(output.format),
          });
        }
      });
    });
    return files;
  }
}