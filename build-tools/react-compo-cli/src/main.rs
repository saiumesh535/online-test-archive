mod helpers;

use crate::helpers::fs_helper::write_file_src;
use crate::helpers::string_helper::string_replace;

fn main() {
    let component_name = "Testing";
    let component_content = format!("{}", String::from_utf8_lossy(include_bytes!("react-components/component.tsx")));
    let dir_name = String::from("test-cli");
    let file_name = String::from("test-cli.component.tsx");
    // first create component
    let component = string_replace("ReactComponent", component_name, 2, component_content);
    write_file_src(dir_name, file_name, component);
}
