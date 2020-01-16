use std::path::Path;
use std::fs::{ File, create_dir_all };
use std::error::Error;
use std::io::Write;

fn check_dir_exits(path: &String) -> bool {
    return Path::new(path.as_str()).exists();
}

fn create_dir(path: &String) {
    create_dir_all(path.as_str()).unwrap();
}

pub fn write_file_src(dir_name: String, file_name: String, content: String) {
    let dir_path = format!("src/components/{dir_name}", dir_name = dir_name);
    if !check_dir_exits(&dir_path) {
        create_dir(&dir_path)
    };
    let file_path = format!("src/components/{dir_name}/{file_name}", dir_name = dir_name, file_name= file_name);
    let path = Path::new(file_path.as_str());
    let display = path.display();
    // Open a file in write-only mode, returns `io::Result<File>`
    let mut file = match File::create(&path) {
        Err(why) => panic!("couldn't create {}: {}", display, why.description()),
        Ok(file) => file,
    };
    // Write the `LOREM_IPSUM` string to `file`, returns `io::Result<()>`
    match file.write_all(content.as_bytes()) {
        Err(why) => panic!("couldn't write to {}: {}", display, why.description()),
        Ok(_) => println!("successfully wrote to {}", display),
    };
}