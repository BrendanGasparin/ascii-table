const tablebody = document.querySelector('tbody');

for (let r = 0; r < 16; r++) {
    const row = tablebody.insertRow();

    for (let c = 0; c < 8; c++) {
        const ascii_value = r + c * 16;
        let symbol = -1;
        const unusual_chars = ["NUL", "SOH", "STX", "ETX", "EOT", "ENC", "ACK", "BEL", "BS", "HT", "LF", "VT", "FF", "CR", "SO", "SI", "DLE", "DC1", "DC2", "DC3", "DC4", "NAK", "SYN", "ETB", "CAN", "EM", "SUB", "ESC", "PS", "GS", "RS", "US"]

        if (ascii_value < 32) {
            symbol = unusual_chars[ascii_value];
        }
        else if (ascii_value < 127 ) {
            symbol = String.fromCharCode(ascii_value);
        }
        else {
            symbol = "DEL";
        }

        const cell1 = row.insertCell();
        const cell2 = row.insertCell();

        cell1.textContent = ascii_value;
        cell1.style.backgroundColor= "#bbbbff";
        cell2.textContent = symbol;
    }
}
