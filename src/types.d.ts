interface PageState {
  userName: string;
  resultHidden: boolean;
  result: string;
  clicked: boolean;
}

type ShowResult = (value: boolean) => void;
type SetResult = (value: string) => void;
type GenerateName = (names: []) => string;