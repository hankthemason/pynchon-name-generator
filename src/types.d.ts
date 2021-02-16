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
  book: string;
}

interface Nickname {
  nickname: string;
}

interface Prefix {
  prefix: string;
}

interface NameData  {
  characters: CharacterName [];
  nicknames: Nickname [];
  prefixes: Prefix [];
}

type Filenames = ['characters', 'nicknames', 'prefixes']

type ShowResult = (value: boolean) => void;
type SetResult = (value: string) => void;
type GenerateName = (input: string, NameData) => string;