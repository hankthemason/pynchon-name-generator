interface PageState {
  result: string;
  resultHidden: boolean;
  name: string;
}

type ShowResult = (value: boolean) => void;
type SetResult = (value: string) => void;
type GenerateName = (names: []) => string;