interface PageState {
  userName: string;
  resultHidden: boolean;
  result: string;
  clicked: boolean;
  showError: boolean;
}

interface CharacterName {
  first_name: string;
  strange_first: number;
  last_name: string;
  strange_last: number;
  sex: string;
  book: string;
}

type ShowResult = (value: boolean) => void;
type SetResult = (value: string) => void;
type GenerateName = (input: string, names: []) => string;